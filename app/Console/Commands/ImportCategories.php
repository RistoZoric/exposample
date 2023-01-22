<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Exception;
use App\Models\Category;
use App\Models\CategoryTranslation;
use Illuminate\Support\Str;
use League\Csv\Reader;

class ImportCategories extends Command
{
    protected $signature = 'categories:import';

    protected $description = 'Import the categories from CSV';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $count = 0;
        try {
            $csv = Reader::createFromPath(storage_path('categories.csv'), 'r');
            $csv->fetchColumn(2);

            $records = $csv->getRecords();

            $categories = [];
            $subcategories = [];
            foreach ($records as $record) {
                if (count($record) > 1) {
                    $c = explode(';', $record[0]);
                    if (empty($c[0])) {
                        $categories[] = trim($c[1]);
                        $subcategories[$c[1]][] = trim($c[2]);
                    }
                    foreach (array_slice($record, 1, count($record) - 1, true) as $subcategory) {
                        $subcategories[$c[1]][] = trim($subcategory, '\ \;');
                    }
                }
            }

            foreach ($categories as $category) {
                $dbCategory = new Category(['slug' => Str::of($category)->slug('-')]);
                $dbCategory->save();
                $dbCategoryTranslation = new CategoryTranslation([
                    'category_id' => $dbCategory->id,
                    'locale' => 'en',
                    'name' => $category
                ]);
                $dbCategoryTranslation->save();
                $count++;
            }

            foreach ($subcategories as $key => $value) {
                $dbCategory = Category::where('slug', Str::of($key)->slug('-'))->first();
                foreach ($value as $v) {
                    $dbSubCategory = new Category(['slug' => Str::of($v)->slug('-')]);
                    $dbCategory->appendNode($dbSubCategory);
                    $dbSubCategoryTranslation = new CategoryTranslation([
                        'category_id' => $dbSubCategory->id,
                        'locale' => 'en',
                        'name' => $v
                    ]);
                    $dbSubCategoryTranslation->save();
                    $count++;
                }
            }
            $this->info('Imported ' . $count . ' categories.');
        } catch (Exception $exception) {
            $this->error('Failed to import categories.');
            $this->error($exception->getMessage());
        }
    }
}
