import React, {useEffect} from "react";
import {Switch} from "react-router-dom";
import "./utils/i18n";
import {withTranslation} from "react-i18next";
import {router} from "./router";
import query from "query-string";
import {withRouter} from 'react-router'
import MiddlewareRoute from "./components/MiddlewareRoute";

function App(props: any) {
    useEffect(() => {
        const token: any = query.parse(props.location.search);

        if (token.token != null) {
            sessionStorage.setItem('token', token.token);
        }
    }, [props.location.search])

    return (
        <Switch>
            {router.map(router => (
                <MiddlewareRoute
                    middlewares={router.middlewares}
                    key={router.path}
                    exact
                    path={router.path}
                    component={router.component}
                />
            ))}
        </Switch>
    );
}

export default withRouter(withTranslation()(App) as any);
