import React from "react";
import TableMasterApi from "./components/TableMasterApi";
import MainLayout from "components/layout/Mainlayout";

const TableApi = () => {
    return <MainLayout>
        <TableMasterApi url={"/users/all"}/>
    </MainLayout>
}

export default TableApi;