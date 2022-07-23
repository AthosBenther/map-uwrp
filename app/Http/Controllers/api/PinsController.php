<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Pin;

class PinsController extends Controller
{
    function browse(){
        $pins = Pin::select(['vertical', 'horizontal'])
        ->get()
        ->toArray();

        return response()->json($pins);
    }
}
