import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
const ListCategories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCategories.url(options),
    method: 'get',
})

ListCategories.definition = {
    methods: ["get","head"],
    url: '/dashboard/categories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
ListCategories.url = (options?: RouteQueryOptions) => {
    return ListCategories.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
ListCategories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCategories.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
ListCategories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCategories.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
    const ListCategoriesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListCategories.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
        ListCategoriesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCategories.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Categories\Pages\ListCategories::__invoke
 * @see app/Filament/Resources/Categories/Pages/ListCategories.php:7
 * @route '/dashboard/categories'
 */
        ListCategoriesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCategories.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListCategories.form = ListCategoriesForm
export default ListCategories