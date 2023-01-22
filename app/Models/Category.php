<?php

namespace App\Models;

use App\Scopes\CategoryPopularityScope;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;

/**
 * @mixin IdeHelperCategory
 */
class Category extends Model implements TranslatableContract, Sortable
{
    use Translatable, SortableTrait;

    protected $fillable = [
        'slug',
    ];

    public array $translatedAttributes = [
        'name'
    ];

    /**
     * @return string
     */
    public function identifiableAttribute(): string
    {
        return 'name';
    }

    protected static function booted()
    {
        static::addGlobalScope(new CategoryPopularityScope);
    }

    /**
     * @param $query
     * @param $slug
     * @return mixed
     */
    public function scopeSlug($query, $slug): mixed
    {
        return $query->where('slug', $slug);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeShowOnHome($query): mixed
    {
        return $query->where('show_on_home', true);
    }

    /**
     * @return HasMany
     */
    public function topCreators(): HasMany
    {
        return $this->creators()->inRandomOrder()->limit(16);
    }

    /**
     * @return HasMany
     */
    public function creators(): HasMany
    {
        return $this->hasMany(User::class)->isVerified();
    }
}
