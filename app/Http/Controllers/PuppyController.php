<?php

namespace App\Http\Controllers;

use App\Http\Resources\PuppyResource;
use App\Models\Puppy;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class PuppyController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('search');

        $query = Puppy::query();
        if ($search) {
            $query->where('name', 'like', "%{$search}%");
            $query->orWhere('trait', 'like', "%{$search}%");
        }
        $query->with(['user', 'likedBy']);

        $puppies = $query->paginate(15)->withQueryString();

        return Inertia::render('puppies/index', [
            'canRegister' => Features::enabled(Features::registration()),
            'puppies' => PuppyResource::collection($puppies),
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function like(Request $request, Puppy $puppy)
    {
        // sleep(1);
        $puppy->likedBy()->toggle($request->user()->id);

        return back();
    }
}
