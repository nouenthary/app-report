import React from "react";
import ReportImport from "./ReportImport";
import query from 'query-string';
import Page404 from "../Page404";

const PageImport = (props: any) => {
    // return   <ReportImport/>
    const token: any = query.parse(props.location.search);

    if (token.token != null) {
        sessionStorage.setItem('token', token.token);
    }

    return <>{sessionStorage.getItem('token') ? <ReportImport/> : <Page404/>}</>
}

export default PageImport;