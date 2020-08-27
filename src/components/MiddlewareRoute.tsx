import React, {FunctionComponent, useEffect, useState} from "react"
import {Route, RouteProps} from "react-router";
import Page404 from "../page/Page404";

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
    }, [middlewares])

    if (isValid === undefined) {
        return <></>
    }

    if (!isValid) {
        return (<Page404/>)
    }

    return (
        <Route
            {...routeProps}
        />
    )
}

export default MiddlewareRoute