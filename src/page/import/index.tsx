import React from "react";
import ReportImport from "./ReportImport";
import query from 'query-string';
import Page404 from "../Page404";
import {fetchApi} from "utils/base_url";

const validateToken = () => {
    return fetchApi("/customers", 'GET');
}

const PageImport = (props: any) => {
    validateToken().then(res => {
        if (res.status !== 200) {
            props.history.push('/error')
        }
    });

    // return   <ReportImport/>
    const token: any = query.parse(props.location.search);

    if (token.token != null) {
        sessionStorage.setItem('token', token.token);
    }

    return <>{sessionStorage.getItem('token') ? <ReportImport/> : <Page404/>}</>
}

export default PageImport;