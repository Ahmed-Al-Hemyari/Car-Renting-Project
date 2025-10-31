import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
const EditRate = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRate.url(args, options),
    method: 'get',
})

EditRate.definition = {
    methods: ["get","head"],
    url: '/dashboard/rates/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
EditRate.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditRate.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
EditRate.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditRate.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
EditRate.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditRate.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
    const EditRateForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditRate.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
        EditRateForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditRate.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Rates\Pages\EditRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/EditRate.php:7
 * @route '/dashboard/rates/{record}/edit'
 */
        EditRateForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditRate.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditRate.form = EditRateForm
export default EditRate