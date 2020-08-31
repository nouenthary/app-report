import React, {Component} from "react";
import {v4} from "uuid";
import styled from "styled-components";

const ReportTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 50px;
  text-align: center;
`;

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

class ReportDesigned extends Component<any, any> {
    getTableRow = (data: any, columns: any) => {
        let row: any = [];
        for (let key in data) {
            columns.filter(function (item: any) {
                return item['dataIndex'] === key && row.push(<td key={v4() + ''}>{data[key + '']}</td>)
            })
        }
        return row
    }

    render() {
        return (
            <div>
                <ReportTitle>
                    Report Export Products
                    <Text>Welcome to our report...</Text>
                    <hr style={{border: "0.5px solid #d9d9d9"}}/>
                </ReportTitle>

                <table id="report-import">
                    <thead>
                    <tr style={{background: "#ddd"}}>
                        {this.props.getColumns && this.props.getColumns.map((column: any) => (
                            <th key={column.title}>{column.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.getDataSource && this.props.getDataSource.map((item: any, index: number) => (
                        <tr key={item + index + 1}>
                            {this.getTableRow(item, this.props.getColumns)}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ReportDesigned

