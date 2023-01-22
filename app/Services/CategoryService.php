<?php

namespace App\Services;

use App\Models\Category;

class CategoryService
{
    protected Category $category;

    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    /**
     * @param $limit
     * @return mixed
     */
    public function getCategoriesShownOnHome($limit): mixed
    {
        return $this->category->withTranslation()
            ->showOnHome()
            ->limit($limit)
            ->get();
    }
}
