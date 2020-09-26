import React from "react";
import TableCustom from "./TableCustom";
import {Table} from "antd";

const MasterTable = (props: any) => {

    const {columns} = props;

    const getTable = () => {
        if (columns) {
            return (
                <>
                    {columns.length > 0 ?
                        <TableCustom {...props} /> : <Table loading={true}/>
                    }
                </>
            )
        }
        return <Table loading={true}/>
    }
    return getTable();
}
export default MasterTable;