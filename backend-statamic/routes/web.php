<?php

use Illuminate\Support\Facades\Route;
use Statamic\Facades\Asset;
use Statamic\Facades\Entry;
use Statamic\Facades\GlobalSet;

function assetUrl($image)
{
    if (! $image || empty($image)) {
        return null;
    }

    $path = is_array($image) ? $image[0] : $image;
    $asset = Asset::find($path) ?? Asset::find('assets::'.$path);

    return $asset ? $asset->absoluteUrl() : null;
}

Route::get('/api/services', function () {
    return Entry::query()
        ->where('collection', 'services')
        ->get()
        ->map(function ($entry) {
            return [
                'title' => $entry->get('title'),
                'title_fr' => $entry->get('title_fr'),
                'title_en' => $entry->get('title_en'),
                'description_fr' => $entry->get('description_fr'),
                'description_en' => $entry->get('description_en'),
                'image' => assetUrl($entry->get('image')),
                'order' => $entry->get('order'),
            ];
        })
        ->sortBy('order')
        ->values();
});

Route::get('/api/projects', function () {
    return Entry::query()
        ->where('collection', 'projects')
        ->get()
        ->map(function ($entry) {
            return [
                'title' => $entry->get('title'),
                'title_fr' => $entry->get('title_fr'),
                'title_en' => $entry->get('title_en'),
                'description_fr' => $entry->get('description_fr'),
                'description_en' => $entry->get('description_en'),
                'technologies' => $entry->get('technologies'),
                'project_url' => $entry->get('project_url'),
                'image' => assetUrl($entry->get('image')),
                'order' => $entry->get('order'),
            ];
        })
        ->sortBy('order')
        ->values();
});

Route::get('/api/homepage', function () {
    $homepage = GlobalSet::findByHandle('homepage');

    return $homepage
        ? $homepage->inDefaultSite()->data()->all()
        : [];
});
