// Typing file for F#-JS interop with the Pusher Platform API.
// Initially generated with ts2fable.

namespace G
open System
open Fable.Core
open Fable.Import.JS
open Fable.Import.Browser

[<Global>]
//[<Import("PusherPlatform", from="pusher-platform-js")>]
module PusherPlatform =

    type Headers =
        obj // NOTE this is actually a string->string map?

    and [<AllowNullLiteral>] Event =
        abstract eventId: string with get, set
        abstract headers: Headers with get, set
        abstract body: obj with get, set

    and [<AllowNullLiteral>] RequestOptions =
        abstract ``method``: string with get, set
        abstract path: string with get, set
        abstract jwt: string option with get, set
        abstract headers: Headers option with get, set
        abstract body: obj option with get, set

    and [<AllowNullLiteral>] SubscribeOptions(path, ?jwt, ?headers) =
        member this.path: string = path
        member this.jwt: string option = jwt
        member this.headers: Headers option = headers
        member this.onOpen: Func<unit, unit> option = None // TODO add addEventHandler_... methods here?
        member this.onEvent: Func<Event, unit> option = None
        member this.onEnd: Func<unit, unit> option = None
        member this.onError: Func<Error, unit> option = None

    and [<AllowNullLiteral>] ErrorResponse(xhr: XMLHttpRequest) =
        member __.statusCode with get(): float = jsNative and set(v: float): unit = jsNative
        member __.headers with get(): Headers = jsNative and set(v: Headers): unit = jsNative
        member __.info with get(): obj = jsNative and set(v: obj): unit = jsNative

    and [<AllowNullLiteral>] Subscription(xhr: XMLHttpRequest, options: SubscribeOptions) =
        member __.gotEOS with get(): bool = jsNative and set(v: bool): unit = jsNative
        member __.calledOnOpen with get(): bool = jsNative and set(v: bool): unit = jsNative
        member __.lastNewlineIndex with get(): float = jsNative and set(v: float): unit = jsNative
        member __.opened(): obj = jsNative
        member __.``open``(jwt: string): obj = jsNative
        member __.onChunk(): Error = jsNative
        member __.onMessage(message: ResizeArray<obj>): Error = jsNative // FIXME isn't a lot of this private? Perhaps go through the whole file?
        member __.onEventMessage(eventMessage: ResizeArray<obj>): Error = jsNative
        member __.onEOSMessage(eosMessage: ResizeArray<obj>): Error = jsNative
        member __.abort(err: Error): obj = jsNative

    and [<AllowNullLiteral>] BaseClientOptions =
        abstract cluster: string with get, set
        abstract encrypted: bool option with get, set
        abstract timeout: float option with get, set
        abstract XMLHttpRequest: Function option with get, set

    and [<AllowNullLiteral>] BaseClient(options: BaseClientOptions) =
        member __.baseURL with get(): string = jsNative and set(v: string): unit = jsNative
        member __.XMLHttpRequest with get(): obj = jsNative and set(v: obj): unit = jsNative
        member __.request(options: RequestOptions): Promise<obj> = jsNative
        member __.newSubscription(subOptions: SubscribeOptions): Subscription = jsNative
        member __.createXHR(baseURL: string, options: RequestOptions): XMLHttpRequest = jsNative

    and [<AllowNullLiteral>] Authorizer =
        abstract authorize: unit -> Promise<string>

    and [<AllowNullLiteral>] SimpleTokenAuthorizer(jwt: string) =
        interface Authorizer with
            member __.authorize(): Promise<string> = jsNative


    and [<AllowNullLiteral>] AuthServerAuthorizer(authServerUrl: string) =
        interface Authorizer with
            member __.authorize(): Promise<string> = jsNative
        member __.accessToken with get(): string = jsNative and set(v: string): unit = jsNative

    and Response =
        obj

    and [<AllowNullLiteral>] FeedSubscribeOptions(?lastEventId, ?onOpen, ?onItem, ?onError) =
        member this.lastEventId: string option = lastEventId
        member this.onOpen: (unit -> unit) option = onOpen
        member this.onItem: (Event -> unit) option = onItem
        member this.onError: (Error -> unit) option = onError

    and [<AllowNullLiteral>] FeedsGetOptions(?fromId, ?limit) =
        member this.fromId: string option = fromId
        member this.limit: float option = limit

    and [<AllowNullLiteral>] FeedsHelper(name: string, app: App) =
        member __.app with get(): App = jsNative and set(v: App): unit = jsNative
        member __.feedName with get(): string = jsNative and set(v: string): unit = jsNative
        member __.subscribe(options: FeedSubscribeOptions): Subscription = jsNative
        member __.get(?options: FeedsGetOptions): Promise<obj> = jsNative
        member __.append(item: obj): Promise<Response> = jsNative

    and AppOptions(appId, ?cluster, ?authorizer, ?client, ?encrypted) =
        member this.appId : string = appId
        member this.cluster : string option = cluster
        member this.authorizer: Authorizer option = authorizer
        member this.client: BaseClient option = client
        member this.encrypted: bool option = encrypted

    and [<AllowNullLiteral>] App(options: AppOptions) =
        member __.client with get(): BaseClient = jsNative and set(v: BaseClient): unit = jsNative
        member __.appId with get(): string = jsNative and set(v: string): unit = jsNative
        member __.authorizer with get(): Authorizer = jsNative and set(v: Authorizer): unit = jsNative
        member __.request(options: RequestOptions): Promise<Response> = jsNative
        member __.subscribe(options: SubscribeOptions): Subscription = jsNative
        member __.feed(name: string): FeedsHelper = jsNative
        member __.absPath(relativePath: string): string = jsNative


