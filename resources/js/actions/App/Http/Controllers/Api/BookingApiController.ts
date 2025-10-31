import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BookingApiController::index
 * @see app/Http/Controllers/Api/BookingApiController.php:12
 * @route '/api/bookings'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Api\BookingApiController::store
 * @see app/Http/Controllers/Api/BookingApiController.php:23
 * @route '/api/bookings'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\BookingApiController::store
 * @see app/Http/Controllers/Api/BookingApiController.php:23
 * @route '/api/bookings'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BookingApiController::store
 * @see app/Http/Controllers/Api/BookingApiController.php:23
 * @route '/api/bookings'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\BookingApiController::store
 * @see app/Http/Controllers/Api/BookingApiController.php:23
 * @route '/api/bookings'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BookingApiController::store
 * @see app/Http/Controllers/Api/BookingApiController.php:23
 * @route '/api/bookings'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
export const show = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/bookings/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
show.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: args.booking,
                }

    return show.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
show.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
show.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
    const showForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
        showForm.get = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\BookingApiController::show
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
        showForm.head = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
export const update = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/bookings/{booking}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
update.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: args.booking,
                }

    return update.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
update.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
update.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
    const updateForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
        updateForm.put = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\BookingApiController::update
 * @see app/Http/Controllers/Api/BookingApiController.php:43
 * @route '/api/bookings/{booking}'
 */
        updateForm.patch = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Api\BookingApiController::destroy
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
export const destroy = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/bookings/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\BookingApiController::destroy
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
destroy.url = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: args.booking,
                }

    return destroy.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\BookingApiController::destroy
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
destroy.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\BookingApiController::destroy
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
    const destroyForm = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\BookingApiController::destroy
 * @see app/Http/Controllers/Api/BookingApiController.php:0
 * @route '/api/bookings/{booking}'
 */
        destroyForm.delete = (args: { booking: string | number } | [booking: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const BookingApiController = { index, store, show, update, destroy }

export default BookingApiController