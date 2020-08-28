import React from "react";
import ReactTableExcel from "../../components/ReactTableExcel";

const Excel = () => {
    return (
        <>
            <ReactTableExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table"
                filename="tablexls"
                sheet="tablexls"
                buttonText="Download as XLS"
            />
            <table id="table">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
            </table>
        </>
    )
}

export default Excel;