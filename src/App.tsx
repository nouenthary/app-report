import React from "react";
import {Switch, Route} from "react-router-dom";
import "./i18n";
import {withTranslation} from "react-i18next";
import {router} from "./router";

function App() {
    return (
        <Switch>
            {router.map(router => (
                <Route key={router.path} exact path={router.path} component={router.component}/>
            ))}
        </Switch>
    );
}

export default withTranslation()(App);
