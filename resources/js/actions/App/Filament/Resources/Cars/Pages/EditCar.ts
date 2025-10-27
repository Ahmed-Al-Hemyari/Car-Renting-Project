import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
const EditCar = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCar.url(args, options),
    method: 'get',
})

EditCar.definition = {
    methods: ["get","head"],
    url: '/admin/cars/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
EditCar.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditCar.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
EditCar.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditCar.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
EditCar.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditCar.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
    const EditCarForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditCar.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
        EditCarForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditCar.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Cars\Pages\EditCar::__invoke
 * @see app/Filament/Resources/Cars/Pages/EditCar.php:7
 * @route '/admin/cars/{record}/edit'
 */
        EditCarForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditCar.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditCar.form = EditCarForm
export default EditCar