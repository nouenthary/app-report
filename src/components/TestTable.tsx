import React from 'react'
// @ts-ignore
import EnhanceAntdTable, {
    newColumnsInterface,
    TableSkeleton
} from 'enhance-antd-table'
//@ts-ignore
import {Tag} from 'antd'
import 'enhance-antd-table/dist/index.css'

// const layout = {
//     labelCol: {span: 4},
//     wrapperCol: {span: 18}
// }
// const tailLayout = {
//     wrapperCol: {offset: 0, span: 20}
// }
//
// const formProps = {
//     layout,
//     tailLayout
// }

const dummy = [
    {
        name: 'លីហួរ',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
    },
    {
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser']
    },
    {
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    },
    {
        name: 'LyhourChhen',
        age: 322,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher']
    }
]

let data: any[] = []

for (let i = 0; i < 4; i++) {
    data.push(...dummy)
}

const columns: Array<newColumnsInterface> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',

        render: (tags: any) => (
            <div>
                {tags.map((tag: any, index: number) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={index}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </div>
        )
    }
]


const TestTable = () => {
    return (
        <TableSkeleton>
            <EnhanceAntdTable
                name={'exampleTable'}
                withColumnsVisibleController={true}
                // renderCreateButton={({ setDataSource }: any) => {
                //   setDataSourceRef.current = setDataSource
                //   return <Button onClick={() => setModal(true)}>Create</Button>
                // }}
                // printProps={{
                //     generateColumnHeaders: (columns, avaiableFonts) => {
                //         return columns.map((item) => ({
                //             text: item.title,
                //             fontSize: 20,
                //             font: avaiableFonts.kh
                //         }))
                //     },
                //     generateColumnWidths: (columns) => {
                //         return columns.map((item) =>
                //             item.dataIndex === 'name' ? 50 : '*'
                //         )
                //     },
                //     generateTableBody: (visibleData: any, avaiableFonts) => {
                //         const newRecords = visibleData.map(
                //             (record: { [index: string]: any }) => {
                //                 let newRow: any[] = []
                //                 for (let key in record) {
                //                     newRow.push({
                //                         text: record[key],
                //                         fontSize: 20,
                //                         font: avaiableFonts.kh
                //                     })
                //                 }
                //
                //                 return newRow
                //             }
                //         )
                //
                //         return newRecords
                //     }
                // }}
                actionDelete={({record, index}) => ({
                    onClick: () => console.log('delete ', record, 'at ' + index)
                })}
                actionDetails={({record, index}) => ({
                    onClick: () => console.log(record, 'at ' + index)
                })}
                // renderOwnActionMenu={({ record, index }) => (
                //   <Menu>
                //     <Menu.Item
                //       key={uuid()}
                //       icon={<DeleteOutlined />}
                //       onClick={() => {
                //         console.log(record, index, 'hello')
                //       }}
                //     >
                //       Delete
                //     </Menu.Item>
                //   </Menu>
                // )}
                // renderOwnSearchInput={({setDataSource}) => (
                //     <Button
                //         onClick={() => {
                //             setDataSource((old) => {
                //                 return old?.length == 0 ? data : []
                //             })
                //         }}
                //     >
                //         Toggle
                //     </Button>
                // )}
                newColumns={columns}
                newSources={data}
                restProps={{
                    bordered: true,
                    scroll: {x: 1550},
                    size: 'small',
                    rowKey: 'id'
                }}
            />
        </TableSkeleton>
    )
}

export default TestTable;