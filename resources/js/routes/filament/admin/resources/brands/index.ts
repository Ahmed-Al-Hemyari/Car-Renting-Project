import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/brands',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Brands\Pages\ListBrands::__invoke
 * @see app/Filament/Resources/Brands/Pages/ListBrands.php:7
 * @route '/admin/brands'
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
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/brands/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Brands\Pages\CreateBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/CreateBrand.php:7
 * @route '/admin/brands/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
export const view = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/admin/brands/{record}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
view.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
view.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
view.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
    const viewForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
        viewForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Brands\Pages\ViewBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/ViewBrand.php:7
 * @route '/admin/brands/{record}'
 */
        viewForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
/**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/brands/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Brands\Pages\EditBrand::__invoke
 * @see app/Filament/Resources/Brands/Pages/EditBrand.php:7
 * @route '/admin/brands/{record}/edit'
 */
        editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const brands = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
view: Object.assign(view, view),
edit: Object.assign(edit, edit),
}

export default brands