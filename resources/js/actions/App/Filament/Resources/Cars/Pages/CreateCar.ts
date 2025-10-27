import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
const CreateCar = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCar.url(options),
    method: 'get',
})

CreateCar.definition = {
    methods: ["get","head"],
    url: '/admin/cars/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
CreateCar.url = (options?: RouteQueryOptions) => {
    return CreateCar.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
CreateCar.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateCar.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
CreateCar.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateCar.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
    const CreateCarForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateCar.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
        CreateCarForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCar.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Cars\Pages\CreateCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/CreateCar.php:7
 * @route '/admin/cars/create'
 */
        CreateCarForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateCar.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateCar.form = CreateCarForm
export default CreateCar