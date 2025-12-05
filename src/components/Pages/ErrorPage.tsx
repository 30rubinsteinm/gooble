import "../../App.css"
import { useRouteError, isRouteErrorResponse } from "react-router"
const ErrorPage = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error))
    {
        return (
            <div>
               <h1>{error.status} {error.statusText}</h1>
               <h2>Developer info: {error.data}</h2>
            </div>
        )
    }
    else if (error instanceof Error)
    {
        return (
            <div>
                <h1>Error!</h1>
                <h2>{error.message}</h2><br/>

                <h2>Developer info:</h2>
                <pre>{error.stack}</pre>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Unknown error!</h1>
            </div>
        )
    }
}

export default ErrorPage