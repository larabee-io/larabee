<?php

namespace App\Http\Controllers\Api;

use App\Jobs\ProcessEvent;

use App\Http\Requests\EventStoreRequest;
use App\Models\Website;

use Illuminate\Support\Facades\Cache;

class EventController extends Controller
{
    public function store(EventStoreRequest $request)
    {
        $website = Cache::remember("website:{$request->website_id}", now()->addMinutes(5), function () use ($request) {
            return Website::where('id', $request->website_id)->first();
        });

        if (!$website) {
            return response()->json(null, 404);
        }

        $data = [
            'ip' => $request->ip(),
            'user_agent' => $request->header('user-agent'),
            'hostname' => $request->hostname,
            'name' => $request->name,
            'data' => $request->data,
        ];

        ProcessEvent::dispatch($data, $website);

        return response()->json(null, 202);
    }
}
