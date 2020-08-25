import React from "react";
import {Switch, Route} from "react-router-dom";
import "./i18n";
import ReportImportDetails from "./page/import/ReportImportDetails";
import {withTranslation} from "react-i18next";
import ReportExportDetails from "./page/export/ReportExportDetails";
import PageImport from "./page/import";
import PageExport from "./page/export";

function App() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={PageImport}/>
                <Route path="/export" component={PageExport}/>
                <Route path="/reportImportDetails/:id" component={ReportImportDetails}/>
                <Route path='/ReportExportDetails/:id' component={ReportExportDetails}/>
            </Switch>
        </>
    );
}

export default withTranslation()(App);
