<?php

namespace App\Http\Controllers;

use App\Actions\OptimizeWebpImageAction;
use App\Http\Resources\PuppyResource;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
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
            'likedPups' => PuppyResource::collection($likedPups),
        ]);
    }

    /**
     * Like
     */
    public function like(Request $request, Puppy $puppy)
    {
        // usleep(200000);
        $likeResult = $puppy->likedBy()->toggle($request->user()->id);

        if ($likeResult['attached']) {
            return back()->with('success', 'Puppy "'.$puppy->name.'" liked successfully.');
        } else {
            return back()->with('warning', 'Puppy "'.$puppy->name.'" unliked successfully.');
        }
        // return back();
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

            $optimised = (new OptimizeWebpImageAction)->handle($request->file('image'));
            $path = 'puppies/'.$optimised['fileName'];
            $stored = Storage::disk('public')->put($path, $optimised['webpString']);

            if (! $stored) {
                return back()->withErrors(['image' => 'Failed to upload image.']);
            }
            $imagePath = Storage::url($path);
        }

        // Create a new Puppy instance attached to the authenticated user
        $puppy = $request->user()->puppies()->create([
            'name' => $validatedData['name'], 'trait' => $validatedData['trait'], 'image_url' => $imagePath,
        ]);

        // Redirect to page 1
        return redirect()->route('home', ['page' => '1'])->with('success', 'Puppy created successfully.');
    }

    /**
     * Destroy
     */
    public function destroy(Request $request, Puppy $puppy)
    {
        // sleep(2);
        if ($request->user()->cannot('delete', $puppy)) {
            return redirect()->back()->with('warning', 'You are not authorized to delete this puppy.');
            // return redirect()->to(route('home'), 303)->with('warning', 'You are not authorized to delete that puppy.');
        }

        $puppyName = $puppy->name;
        $puppy->delete();

        return redirect()->route('home', ['page' => '1'])->with('success', 'Puppy "'.$puppyName.'" deleted successfully.');
    }
}
