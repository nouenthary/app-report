import React, {useEffect, useState} from "react";
import MasterTable from "components/Table/MasterTable";
import {FETCH_DATA_API} from "../service";
import {generatorForTable} from "components/Table/TableFunction";

type TableMasterProps = {
    url: any;
}

const TableMasterApi = (props: TableMasterProps) => {
    const {url} = props;

    const [state, setState] = useState<any>({
        columns: [],
        data: []
    });

    useEffect(() => {
        FETCH_DATA_API(url)
            .then((response) => {
                const {data, columns} = generatorForTable(response);
                setState({data, columns});
            })
    }, [url]);

    return <MasterTable columns={state.columns} dataSource={state.data} rowKey={`id`}/>
}

export default TableMasterApi;