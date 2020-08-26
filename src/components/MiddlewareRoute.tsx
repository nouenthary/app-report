import React, {FunctionComponent, useEffect, useState} from "react"
import {Route, RouteProps} from "react-router";

export interface MiddlewareRouteProps extends RouteProps {
    middlewares?: (() => boolean)[]

}

const MiddlewareRoute: FunctionComponent<MiddlewareRouteProps> = props => {
    const {middlewares = [], ...routeProps} = props

    const [isValid, setIsValid] = useState<boolean | undefined>(undefined)

    useEffect(() => {

        setTimeout(async () => {
            const middlewareResult = middlewares.reduce((result, middleware) => {
                if (result === false) {
                    return false
                }
                return middleware()
            }, true)
            setIsValid(middlewareResult)

        }, 0)
    }, [])

    console.log("Render Route ", isValid)
    if (isValid === undefined) {
        return <h1>Loading</h1>
    }

    if (isValid === false) {
        return (<></>)
    }

    return (
        <Route
            {...routeProps}
        />
    )
}

// @ts-ignore
export default MiddlewareRoute