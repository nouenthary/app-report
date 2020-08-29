import React from "react";
import './index.css';
import {Button, Card, Input, Space, Table, Menu, Dropdown, Checkbox} from "antd";
import {RowButtonPrint} from "page/export/ReportExport";
import {Container} from "../utils/Container";
import Highlighter from "react-highlight-words";
import {SearchOutlined, AppstoreOutlined} from '@ant-design/icons';
import ResizableTitle from "./ResizableTitle";
import {PAGINATION} from "utils/constrans";

class TableCustom extends React.Component<any, any> {

    state = {
        columns: this.props.columns,
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

    handleVisibleChange = (flag: any) => {
        this.setState({visible: flag});
    };

    handleMenuClick = (e: any) => {
        if (e.key === this.state.columns.slice(-1).pop()['dataIndex']) {
            this.setState({visible: false});
        }
    };

    handleChangeCheck = (e: any) => {
        console.log(e.target.value);
    }

    render() {
        const columns = this.state.columns.map((col: any, index: any) => (
            {
                ...col,
                onHeaderCell: (column: { width: any; }) => ({
                    width: column.width,
                    onResize: this.handleResize(index),
                }),
                ...col['isSearching'] ? this.getColumnSearchProps(col['dataIndex']) : '',
            }
        ));

        //   console.log(columns);

        const menu = (
            <Menu onClick={this.handleMenuClick}>
                {this.state.columns.map((col: any) => (
                    <Menu.Item key={col.dataIndex}>
                        <Checkbox
                            value={col.dataIndex}
                            key={col.dataIndex}
                            onChange={this.handleChangeCheck}
                            defaultChecked={true}
                        >
                            {col.title}
                        </Checkbox>
                    </Menu.Item>
                ))}
            </Menu>
        );

        return (
            <>
                <Card>
                    <RowButtonPrint columns={columns} dataSource={this.props.dataSource}/>
                    <Dropdown
                        overlay={menu}
                        placement="bottomRight"
                        arrow
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Button><AppstoreOutlined/> Column</Button>
                    </Dropdown>
                </Card>

                <Container>
                    <Table
                        {...this.props}
                        bordered
                        components={this.components}
                        columns={columns}
                        pagination={{pageSize: PAGINATION}}
                    />
                </Container>
            </>
        );
    }
}

export default TableCustom;