import React, {useRef} from "react";
import ReactToPrint from "react-to-print";
import {Button} from "antd";

class TableToPrint extends React.Component {
    render() {
        return (
            <table>
                <thead>
                <th>column 1</th>
                <th>column 2</th>
                <th>column 3</th>
                </thead>
                <tbody>
                <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                </tr>
                <tr>
                    <td>data 1</td>
                    <td>data 2</td>
                    <td>data 3</td>
                </tr>
                </tbody>
            </table>
        )
    }
}


const Print = () => {
    let componentRef: any = useRef(null);
    return (
        <>
            <ReactToPrint
                trigger={() => <Button>Print this out!</Button>}
                content={() => componentRef}
            />
            <TableToPrint ref={el => (componentRef = el)}/>
        </>
    )
}

export default Print;