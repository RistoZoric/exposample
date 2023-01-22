<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperCategoryTranslation
 */
class CategoryTranslation extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'category_id',
        'locale',
        'name',
    ];

    /**
     * @return string
     */
    public function identifiableAttribute(): string
    {
        return 'name';
    }
}
