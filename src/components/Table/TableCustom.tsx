import {Resizable} from "react-resizable";
import React from "react";
import './index.css';
import MainLayout from "../layout/Mainlayout";
import {Card, Table} from "antd";
import {RowButtonPrint} from "../../page/export/ReportExport";
import {Container} from "../utils/Container";

const ResizableTitle = (props: any) => {
    const {onResize, width, ...restProps} = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            hight={0}
            handle={
                <span className="react-resizable-handle"
                      onClick={e => {
                          e.stopPropagation();
                      }}/>
            }
            onResize={onResize}
            draggableOpts={{enableUserSelectHack: false}}
        >
            <th {...restProps}/>
        </Resizable>
    )
}

class TableCustom extends React.Component<any, any> {
    state = {
        columns: this.props.columns
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

    render() {
        const columns = this.state.columns.map((col: any, index: any) => ({
            ...col,
            onHeaderCell: (column: { width: any; }) => ({
                width: column.width,
                onResize: this.handleResize(index),
            }),
        }));


        return (
            <MainLayout>
                <Card>
                    <RowButtonPrint columns={columns} dataSource={this.props.dataSource}/>
                </Card>
                <Container>
                    <Table
                        {...this.props}
                        bordered
                        components={this.components}
                        columns={columns}
                    />
                </Container>
            </MainLayout>
        );
    }
}

export default TableCustom;