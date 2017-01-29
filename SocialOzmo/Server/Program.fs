
open System.Threading
open Suave
open Suave.Filters
open Suave.Operators
open Suave.Successful

let app =
    choose
        [ GET >=> path "/" >=>  Files.file "./public/index.html"
          GET >=> Files.browseHome
          RequestErrors.NOT_FOUND "Page not found"
          POST >=> choose
                [] ]




let cts = new CancellationTokenSource()
let conf = { defaultConfig with cancellationToken = cts.Token;
                                homeFolder = Some (System.IO.Path.GetFullPath "./public") }
let listening, server = startWebServerAsync conf app
Async.Start(server, cts.Token)
printfn "Make requests now"
System.Console.ReadKey true |> ignore
cts.Cancel()