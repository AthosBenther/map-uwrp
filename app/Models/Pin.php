<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * Pin
 *
 * @param float vertical
 * @param float horizontal
 */
class Pin extends Model
{
    protected $fillable = [
        'vertical',
        'horizontal',
    ];
}
