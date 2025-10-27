import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
const CreateBooking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(options),
    method: 'get',
})

CreateBooking.definition = {
    methods: ["get","head"],
    url: '/admin/bookings/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
CreateBooking.url = (options?: RouteQueryOptions) => {
    return CreateBooking.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
CreateBooking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateBooking.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
CreateBooking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateBooking.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
    const CreateBookingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateBooking.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
        CreateBookingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBooking.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\Bookings\Pages\CreateBooking::__invoke
 * @see app/Filament/Resources/Bookings/Pages/CreateBooking.php:7
 * @route '/admin/bookings/create'
 */
        CreateBookingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateBooking.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateBooking.form = CreateBookingForm
export default CreateBooking