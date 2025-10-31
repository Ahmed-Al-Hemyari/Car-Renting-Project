import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
* @see \App\Http\Controllers\BookingController::store
 * @see app/Http/Controllers/BookingController.php:32
 * @route '/bookings/add/{car}'
 */
export const store = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/bookings/add/{car}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookingController::store
 * @see app/Http/Controllers/BookingController.php:32
 * @route '/bookings/add/{car}'
 */
store.url = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { car: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: typeof args.car === 'object'
                ? args.car.id
                : args.car,
                }

    return store.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::store
 * @see app/Http/Controllers/BookingController.php:32
 * @route '/bookings/add/{car}'
 */
store.post = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BookingController::store
 * @see app/Http/Controllers/BookingController.php:32
 * @route '/bookings/add/{car}'
 */
    const storeForm = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookingController::store
 * @see app/Http/Controllers/BookingController.php:32
 * @route '/bookings/add/{car}'
 */
        storeForm.post = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\RateController::store
 * @see app/Http/Controllers/RateController.php:22
 * @route '/rates/{booking}'
 */
export const store = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/rates/{booking}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RateController::store
 * @see app/Http/Controllers/RateController.php:22
 * @route '/rates/{booking}'
 */
store.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { booking: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: typeof args.booking === 'object'
                ? args.booking.id
                : args.booking,
                }

    return store.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RateController::store
 * @see app/Http/Controllers/RateController.php:22
 * @route '/rates/{booking}'
 */
store.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\RateController::store
 * @see app/Http/Controllers/RateController.php:22
 * @route '/rates/{booking}'
 */
    const storeForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RateController::store
 * @see app/Http/Controllers/RateController.php:22
 * @route '/rates/{booking}'
 */
        storeForm.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(args, options),
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
/**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
export const create = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/bookings/add/{car}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
create.url = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { car: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: typeof args.car === 'object'
                ? args.car.id
                : args.car,
                }

    return create.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
create.get = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
create.head = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
    const createForm = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
        createForm.get = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\BookingController::create
 * @see app/Http/Controllers/BookingController.php:25
 * @route '/bookings/add/{car}'
 */
        createForm.head = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
export const create = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/rates/{booking}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
create.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { booking: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: typeof args.booking === 'object'
                ? args.booking.id
                : args.booking,
                }

    return create.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
create.get = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
create.head = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
    const createForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
        createForm.get = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RateController::create
 * @see app/Http/Controllers/RateController.php:15
 * @route '/rates/{booking}'
 */
        createForm.head = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\BookingController::cancel
 * @see app/Http/Controllers/BookingController.php:72
 * @route '/bookings/cancel/{booking}'
 */
export const cancel = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/bookings/cancel/{booking}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BookingController::cancel
 * @see app/Http/Controllers/BookingController.php:72
 * @route '/bookings/cancel/{booking}'
 */
cancel.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { booking: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: typeof args.booking === 'object'
                ? args.booking.id
                : args.booking,
                }

    return cancel.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::cancel
 * @see app/Http/Controllers/BookingController.php:72
 * @route '/bookings/cancel/{booking}'
 */
cancel.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\BookingController::cancel
 * @see app/Http/Controllers/BookingController.php:72
 * @route '/bookings/cancel/{booking}'
 */
    const cancelForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: cancel.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookingController::cancel
 * @see app/Http/Controllers/BookingController.php:72
 * @route '/bookings/cancel/{booking}'
 */
        cancelForm.post = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: cancel.url(args, options),
            method: 'post',
        })
    
    cancel.form = cancelForm
/**
* @see \App\Http\Controllers\BookingController::deleteMethod
 * @see app/Http/Controllers/BookingController.php:82
 * @route '/bookings/delete/{booking}'
 */
export const deleteMethod = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/bookings/delete/{booking}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BookingController::deleteMethod
 * @see app/Http/Controllers/BookingController.php:82
 * @route '/bookings/delete/{booking}'
 */
deleteMethod.url = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { booking: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { booking: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    booking: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        booking: typeof args.booking === 'object'
                ? args.booking.id
                : args.booking,
                }

    return deleteMethod.definition.url
            .replace('{booking}', parsedArgs.booking.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BookingController::deleteMethod
 * @see app/Http/Controllers/BookingController.php:82
 * @route '/bookings/delete/{booking}'
 */
deleteMethod.delete = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\BookingController::deleteMethod
 * @see app/Http/Controllers/BookingController.php:82
 * @route '/bookings/delete/{booking}'
 */
    const deleteMethodForm = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: deleteMethod.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\BookingController::deleteMethod
 * @see app/Http/Controllers/BookingController.php:82
 * @route '/bookings/delete/{booking}'
 */
        deleteMethodForm.delete = (args: { booking: number | { id: number } } | [booking: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: deleteMethod.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    deleteMethod.form = deleteMethodForm
const bookings = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
create: Object.assign(create, create),
cancel: Object.assign(cancel, cancel),
delete: Object.assign(deleteMethod, deleteMethod),
}

export default bookings