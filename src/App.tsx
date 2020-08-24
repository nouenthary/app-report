import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ReportExport from "page/export/ReportExport";
import ReportImport from "page/import/ReportImport";
import ReportImportDetails from "./page/import/ReportImportDetails";
import {withTranslation} from "react-i18next";
import "./i18n";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ReportImport}/>
                <Route path="/export" component={ReportExport}/>
                <Route path={"/reportImportDetails"} component={ReportImportDetails}/>
            </Switch>
        </>
    );
}

export default withTranslation()(App);
