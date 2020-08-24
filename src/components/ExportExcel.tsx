import React from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import Faker from "faker";

const data: any = [];

for (let i = 0; i < 20; i++) {
    data.push({
        Id: Faker.random.number(),
        Name: Faker.name.firstName(),
        Age: 22,
        Address: "PP",
        City: "PP",
        Salary: "$ 122",
        Department: "Department A"
    })
}

export class ExportExcel extends React.Component<any, any> {
    render() {
        return (
            <div>
                <table id="emp" className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Salary</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((p: any, index: any) => {
                            return <tr key={index}>
                                <td>
                                    {p.Id}
                                </td>
                                <td>{p.Name}</td>
                                <td>{p.Age}</td>
                                <td>{p.Address}</td>
                                <td>{p.City}</td>
                                <td>{p.Salary}</td>
                                <td style={{paddingRight: "114px"}}>{p.Department}</td>
                            </tr>
                        })
                    }
                    </tbody>

                </table>
                <div>
                    <ReactHTMLTableToExcel
                        className="btn btn-info"
                        table="emp"
                        filename="ReportExcel"
                        sheet="Sheet"
                        buttonText="Export excel"
                    />
                </div>
            </div>
        )
    }
}

export default ExportExcel;