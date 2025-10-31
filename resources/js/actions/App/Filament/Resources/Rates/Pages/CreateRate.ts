import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
const CreateRate = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRate.url(options),
    method: 'get',
})

CreateRate.definition = {
    methods: ["get","head"],
    url: '/dashboard/rates/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
CreateRate.url = (options?: RouteQueryOptions) => {
    return CreateRate.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
CreateRate.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateRate.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
CreateRate.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateRate.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
    const CreateRateForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateRate.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
        CreateRateForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateRate.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Rates\Pages\CreateRate::__invoke
 * @see app/Filament/Resources/Rates/Pages/CreateRate.php:7
 * @route '/dashboard/rates/create'
 */
        CreateRateForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateRate.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateRate.form = CreateRateForm
export default CreateRate