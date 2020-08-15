import React from "react";
import MainLayout from "../components/Mainlayout";
import {Table, Tabs, List, Col, Row, Button, Space} from "antd";
import styled from "styled-components";
import Faker from "faker";
import moment from "moment";
import {PrinterOutlined, ExportOutlined} from '@ant-design/icons';
// import ReactToPrint from "react-to-print";

const Container = styled.div`
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
        width: 100,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        width: 100,
    },
    {
        title: 'in_stock',
        dataIndex: 'in_stock',
        width: 100,
    },
    {
        title: 'Qty',
        dataIndex: 'qty',
        width: 100,
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
    },
    {
        title: 'Summary',
        dataIndex: 'summary',
        width: 100,
    },
];

const data: any = [];

for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        product: `EdwardKing ${i}`,
        price: "$ " + 328 + i,
        in_stock: 10 + i,
        qty: 10 + i,
        amount: 12 + i,
        summary: 34 + i
    });
}

const ReportTable = () => {
    return (
        <div>
            <Button><PrinterOutlined/></Button>

            <Space size={"large"}/>

            <Button><ExportOutlined/></Button>

            <Container>
                <Table columns={columns} dataSource={data} pagination={{pageSize: 20}} scroll={{x: 720}}/>
            </Container>
        </div>
    )
}

const IncomeTable = () => {
    let faker = Faker

    let incomeDate: { name: String, barcode: String, date: String, price: String } [] = []

    for (let x = 0; x < 20; x++) {
        incomeDate.push({
            name: faker.company.companyName(),
            barcode: 'PKG-' + faker.address.countryCode() + ' | SO-' + faker.address.zipCode(),
            date: moment(faker.date.future()).format('L'),
            price: faker.commerce.price()
        })
    }

    return (
        <Container>
            <List
                size="large"
                bordered
                dataSource={incomeDate}
                renderItem={income => <List.Item>

                    <Row style={{width: "100%"}}>
                        <Col span={18}>
                            <p>{income.name}</p><br/>
                            <p>{income.barcode}</p><br/>
                            <p>{income.date}</p>
                        </Col>
                        <Col span={6}>
                            <p style={{color: "salmon"}}>{income.price}</p><br/>
                            <p style={{color: "skyblue"}}>Payment</p>
                        </Col>
                    </Row>
                </List.Item>}
            />
        </Container>
    )
}

class TablePrint extends React.Component<{}, any> {
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


class Print extends React.Component<{}, any> {
    render() {
        return (
            <div>
                Print
                {/*<ReactToPrint*/}
                {/*    trigger={() => <a href="#">Print this out!</a>}*/}
                {/*    content={() => this.componentRef}*/}
                {/*/>*/}
                {/*<TablePrint ref={el => (this.componentRef = el)}/>*/}
            </div>
        )
    }
}

const Report = () => {
    return (
        <MainLayout>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab={"Report"} key={"1"}>
                    <ReportTable/>
                </Tabs.TabPane>
                <Tabs.TabPane tab={"Income"} key={"2"}>
                    <IncomeTable/>
                </Tabs.TabPane>
                <Tabs.TabPane tab={"Print"} key={"3"}>
                    <Print/>
                </Tabs.TabPane>
            </Tabs>
        </MainLayout>
    )
}


export default Report;