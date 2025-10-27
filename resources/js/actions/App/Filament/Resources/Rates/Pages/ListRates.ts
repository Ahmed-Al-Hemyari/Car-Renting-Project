import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
const ListRates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRates.url(options),
    method: 'get',
})

ListRates.definition = {
    methods: ["get","head"],
    url: '/admin/rates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
ListRates.url = (options?: RouteQueryOptions) => {
    return ListRates.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
ListRates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListRates.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
ListRates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListRates.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
    const ListRatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListRates.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
        ListRatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListRates.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Rates\Pages\ListRates::__invoke
 * @see app/Filament/Resources/Rates/Pages/ListRates.php:7
 * @route '/admin/rates'
 */
        ListRatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListRates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListRates.form = ListRatesForm
export default ListRates