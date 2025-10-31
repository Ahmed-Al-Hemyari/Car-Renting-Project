import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
const Dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})

Dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
Dashboard.url = (options?: RouteQueryOptions) => {
    return Dashboard.definition.url + queryParams(options)
}

/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
Dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Dashboard.url(options),
    method: 'get',
})
/**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
Dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Dashboard.url(options),
    method: 'head',
})

    /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
    const DashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: Dashboard.url(options),
        method: 'get',
    })

            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
        DashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboard.url(options),
            method: 'get',
        })
            /**
* @see \Filament\Pages\Dashboard::__invoke
 * @see vendor/filament/filament/src/Pages/Dashboard.php:7
 * @route '/dashboard'
 */
        DashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: Dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    Dashboard.form = DashboardForm
export default Dashboard