import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RateApiController::store
 * @see app/Http/Controllers/Api/RateApiController.php:14
 * @route '/api/rates'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/rates',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\RateApiController::store
 * @see app/Http/Controllers/Api/RateApiController.php:14
 * @route '/api/rates'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RateApiController::store
 * @see app/Http/Controllers/Api/RateApiController.php:14
 * @route '/api/rates'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\RateApiController::store
 * @see app/Http/Controllers/Api/RateApiController.php:14
 * @route '/api/rates'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\RateApiController::store
 * @see app/Http/Controllers/Api/RateApiController.php:14
 * @route '/api/rates'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
export const getCarRates = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCarRates.url(args, options),
    method: 'get',
})

getCarRates.definition = {
    methods: ["get","head"],
    url: '/api/rates/car/{carId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
getCarRates.url = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { carId: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    carId: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        carId: args.carId,
                }

    return getCarRates.definition.url
            .replace('{carId}', parsedArgs.carId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
getCarRates.get = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCarRates.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
getCarRates.head = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCarRates.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
    const getCarRatesForm = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCarRates.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
        getCarRatesForm.get = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCarRates.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\RateApiController::getCarRates
 * @see app/Http/Controllers/Api/RateApiController.php:35
 * @route '/api/rates/car/{carId}'
 */
        getCarRatesForm.head = (args: { carId: string | number } | [carId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCarRates.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCarRates.form = getCarRatesForm
const RateApiController = { store, getCarRates }

export default RateApiController