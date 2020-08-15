import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Report from "./page/report";

function App() {
    return (
        <Router>
            <Switch>
                <Route extra path="/" component={Report}/>
            </Switch>
        </Router>
    );
}

export default App;
