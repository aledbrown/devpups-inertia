<?php

namespace App\Http\Controllers;

use App\Actions\OptimizeWebpImageAction;
use App\Http\Resources\LikedPuppiedResource;
use App\Http\Resources\PuppyResource;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Intervention\Image\Laravel\Facades\Image;
use Laravel\Fortify\Features;

class PuppyController extends Controller
{
    /**
     * Index
     */
    public function index(Request $request)
    {
        $search = $request->get('search');

        $query = Puppy::query()->latest();
        if ($search) {
            $query->where('name', 'like', "%{$search}%");
            $query->orWhere('trait', 'like', "%{$search}%");
        }
        $query->with(['user', 'likedBy']);

        $puppies = $query->paginate(15)->withQueryString();

        $likedPups = $request->user()?->likedPuppies()->orderBy('name')->get() ?? [];

        return Inertia::render('puppies/index', [
            'canRegister' => Features::enabled(Features::registration()),
            'puppies' => PuppyResource::collection($puppies),
            'filters' => ['search' => $search],
            'likedPups' => LikedPuppiedResource::collection($likedPups),
        ]);
    }

    /**
     * Like
     */
    public function like(Request $request, Puppy $puppy)
    {
        // sleep(1);
        $puppy->likedBy()->toggle($request->user()->id);

        return back();
    }

    /**
     * Store
     */
    public function store(Request $request)
    {
        // sleep(2);

        // Validate the data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'trait' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:5120',
        ]);

        // Store the uploaded image
        $imagePath = null;
        if ($request->hasFile('image')) {

            // // Image optimisation
            // $image = Image::read($request->file('image'));
            // // Scale down only when 1000 pix wide
            // if ($image->width() > 1000) {
            //     $image->scale(width: 1000);
            // }
            // // Convert to WEBP format
            // $webpEncoded = $image->toWebp(quality: 95)->toString();

            $webpEncoded = (new OptimizeWebpImageAction)->handle($request->file('image'));

            // Random filename
            $filename = Str::random().'.webp';
            $path = 'puppies/'.$filename;
            $stored = Storage::disk('public')->put($path, $webpEncoded);

            if (! $stored) {
                return back()->withErrors(['image' => 'Failed to upload image.']);
            }
            $imagePath = Storage::url($path);
        }

        // Create a new Puppy instance attached to the authenticated user
        $puppy = $request->user()->puppies()->create([
            'name' => $validatedData['name'], 'trait' => $validatedData['trait'], 'image_url' => $imagePath,
        ]);

        // Redirect to the same page
        return back()->with('success', 'Puppy created successfully.');
    }

    /**
     * Destroy
     */
    public function destroy(Request $request, Puppy $puppy)
    {
        dd('Delete Pup', $puppy);
        $puppy->delete();

        return back()->with('success', 'Puppy deleted successfully.');
    }
}
