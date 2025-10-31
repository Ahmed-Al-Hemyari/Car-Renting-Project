import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
const ViewCar = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCar.url(args, options),
    method: 'get',
})

ViewCar.definition = {
    methods: ["get","head"],
    url: '/dashboard/cars/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
ViewCar.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return ViewCar.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
ViewCar.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewCar.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
ViewCar.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewCar.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
    const ViewCarForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewCar.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
        ViewCarForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewCar.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Cars\Pages\ViewCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/ViewCar.php:7
 * @route '/dashboard/cars/{record}'
 */
        ViewCarForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewCar.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewCar.form = ViewCarForm
export default ViewCar