import React, {useEffect, useState} from "react";
import MainLayout from "components/layout/Mainlayout";
import {FETCH_DATA_API} from "./service";
import {generatorForTable} from "components/Table/TableFunction";
import MasterTable from "components/Table/MasterTable";

const TableColumn = () => {
    const [state, setState] = useState<any>({
        columns: [],
        data: [],
    });

    useEffect(() => {
        FETCH_DATA_API('/users/data')
            .then((response) => {
                const {data, columns} = generatorForTable(response);
                setState({data, columns});
            })
    }, []);

    return (
        <MainLayout>
            <MasterTable columns={state.columns} dataSource={state.data} rowKey={'id'}/>
        </MainLayout>
    )
}

export default TableColumn;