import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/cars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\CarApiController::index
 * @see app/Http/Controllers/Api/CarApiController.php:14
 * @route '/api/cars'
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
* @see \App\Http\Controllers\Api\CarApiController::store
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/cars',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\CarApiController::store
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CarApiController::store
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Api\CarApiController::store
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\CarApiController::store
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
export const show = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/cars/{car}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
show.url = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: args.car,
                }

    return show.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
show.get = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
show.head = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
    const showForm = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
        showForm.get = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\CarApiController::show
 * @see app/Http/Controllers/Api/CarApiController.php:25
 * @route '/api/cars/{car}'
 */
        showForm.head = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
export const update = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/cars/{car}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
update.url = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: args.car,
                }

    return update.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
update.put = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
update.patch = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
    const updateForm = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
        updateForm.put = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Api\CarApiController::update
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
        updateForm.patch = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Api\CarApiController::destroy
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
export const destroy = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/cars/{car}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\CarApiController::destroy
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
destroy.url = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { car: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    car: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        car: args.car,
                }

    return destroy.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\CarApiController::destroy
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
destroy.delete = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Api\CarApiController::destroy
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
    const destroyForm = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Api\CarApiController::destroy
 * @see app/Http/Controllers/Api/CarApiController.php:0
 * @route '/api/cars/{car}'
 */
        destroyForm.delete = (args: { car: string | number } | [car: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
export const webIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webIndex.url(options),
    method: 'get',
})

webIndex.definition = {
    methods: ["get","head"],
    url: '/cars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
webIndex.url = (options?: RouteQueryOptions) => {
    return webIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
webIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webIndex.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
webIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: webIndex.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
    const webIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: webIndex.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
        webIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webIndex.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CarController::webIndex
 * @see app/Http/Controllers/CarController.php:18
 * @route '/cars'
 */
        webIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webIndex.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    webIndex.form = webIndexForm
/**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
export const webShow = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webShow.url(args, options),
    method: 'get',
})

webShow.definition = {
    methods: ["get","head"],
    url: '/cars/{car}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
webShow.url = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return webShow.definition.url
            .replace('{car}', parsedArgs.car.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
webShow.get = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: webShow.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
webShow.head = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: webShow.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
    const webShowForm = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: webShow.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
        webShowForm.get = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webShow.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\CarController::webShow
 * @see app/Http/Controllers/CarController.php:36
 * @route '/cars/{car}'
 */
        webShowForm.head = (args: { car: number | { id: number } } | [car: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: webShow.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    webShow.form = webShowForm
const cars = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
webIndex: Object.assign(webIndex, webIndex),
webShow: Object.assign(webShow, webShow),
}

export default cars