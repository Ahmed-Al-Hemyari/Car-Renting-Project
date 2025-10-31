import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
const ViewBrand = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBrand.url(args, options),
    method: 'get',
})

ViewBrand.definition = {
    methods: ["get","head"],
    url: '/dashboard/brands/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
ViewBrand.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return ViewBrand.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
ViewBrand.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ViewBrand.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
ViewBrand.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ViewBrand.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
    const ViewBrandForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ViewBrand.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
        ViewBrandForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewBrand.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/dashboard/brands/{record}'
 */
        ViewBrandForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ViewBrand.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ViewBrand.form = ViewBrandForm
export default ViewBrand