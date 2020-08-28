import React from 'react'
import EnhanceAntdTable, {
    TableSkeleton
} from 'enhance-antd-table';
import 'enhance-antd-table/dist/index.css'
import Faker from "faker";
import moment from "moment";
import {withTranslation} from "react-i18next";
import {RowButtonPrint} from "../page/export/ReportExport";
import {Container} from "./utils/Container";
import {Button, Input, Space} from "antd";
import Highlighter from "react-highlight-words";
import {SearchOutlined} from "@ant-design/icons";
import ResizableTitle from "./Table/ResizableTitle";

class TestTable extends React.Component<any, any> {

    state = {
        columns: [],
        searchText: '',
        searchedColumn: '',
        visible: false,
    };

    components = {
        header: {
            cell: ResizableTitle,
        },
    };

    handleResize = (index: string | number) => (e: any, {size}: any) => {
        this.setState(({columns}: any) => {
            const nextColumns: any = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    };

    private searchInput: any;

    getColumnSearchProps = (dataIndex: string) => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}: any) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{width: 188, marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: any) => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value: string, record: { [x: string]: { toString: () => string; }; }) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: (visible: any) => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: (text: { toString: () => string; }) =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (text),
    });

    handleSearch = (selectedKeys: any[], confirm: () => void, dataIndex: any) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = (clearFilters: () => void) => {
        clearFilters();
        this.setState({searchText: ''});
    };

    render() {
        let {t} = this.props;

        const columns: any = [
            {
                title: t('No'),
                dataIndex: 'no',
                key: 'no',
                render: (text: React.ReactNode) => <a href={"/ReportExportDetails/" + 1276923}>{text}</a>,
                onHeaderCell: () => ({
                    width: 200,
                    onResize: this.handleResize('1'),
                }),
            },
            {
                title: t('Invoice'),
                dataIndex: 'invoice',
                key: 'invoice',
                ...this.getColumnSearchProps('invoice'),
                sorter: (a: { invoice: number; }, b: { invoice: number; }) => a.invoice - b.invoice,
            },
            {
                title: t('Date'),
                dataIndex: 'date',
                key: 'date'
            },
            {
                title: t('Time'),
                dataIndex: 'time',
                key: 'time',
            },
            {
                title: t('Amount'),
                dataIndex: 'amount',
                key: 'amount',
                ...this.getColumnSearchProps('amount'),
                sorter: (a: { amount: number; }, b: { amount: number; }) => a.amount - b.amount,
            },
            {
                title: t('Description'),
                dataIndex: 'description',
                key: 'description'
            },
            {
                title: t('Staff'),
                dataIndex: 'staff',
                key: 'staff',
                ...this.getColumnSearchProps('staff')
            },
        ];


        const data: any[] | undefined = [];

        for (let i = 0; i < 333; i++) {
            data.push({
                no: Faker.random.number(),
                invoice: Faker.random.number(),
                date: moment(Faker.date.future()).format('L'),
                time: moment(Faker.date.future()).format('LTS'),
                amount: Faker.commerce.price(),
                description: "Note...",
                staff: Faker.name.firstName()
            });
        }

        return (
            <Container padding={20} height={100}>
                <TableSkeleton>
                    <EnhanceAntdTable
                        name={'exampleTables'}
                        withColumnsVisibleController={true}
                        renderCreateButton={
                            () => <RowButtonPrint columns={columns} dataSource={data}/>
                        }
                        newColumns={columns}
                        newSources={data}
                        restProps={{
                            bordered: true,
                            scroll: {x: 1550},
                            size: 'small',
                            rowKey: 'id',
                            components: this.components
                        }}
                    />
                </TableSkeleton>
            </Container>
        )
    }
}

export default withTranslation()(TestTable);