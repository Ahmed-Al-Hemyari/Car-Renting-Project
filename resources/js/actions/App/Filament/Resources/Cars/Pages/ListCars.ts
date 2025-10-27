import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
const ListCars = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCars.url(options),
    method: 'get',
})

ListCars.definition = {
    methods: ["get","head"],
    url: '/admin/cars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
ListCars.url = (options?: RouteQueryOptions) => {
    return ListCars.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
ListCars.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListCars.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
ListCars.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListCars.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
    const ListCarsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListCars.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
        ListCarsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCars.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Cars\Pages\ListCars::__invoke
 * @see app/Filament/Resources/Cars/Pages/ListCars.php:7
 * @route '/admin/cars'
 */
        ListCarsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListCars.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListCars.form = ListCarsForm
export default ListCars