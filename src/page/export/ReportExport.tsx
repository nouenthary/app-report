import React from "react";
import MainLayout from "components/layout/Mainlayout";
import {Container} from "components/utils/Container";
import {useTranslation} from "react-i18next";
import ExportPrint from "components/Table/ExportPrint";
import TableCustom from "components/Table/TableCustom";
import {message} from "antd";
import {fetchApi} from "../../utils/base_url";
// import {url} from "../import/ReportImport";

const data: any[] | undefined = [];

for (let i = 0; i < 100; i++) {
    data.push({
        _id: i,
        invoice: 234032480 + i,
        date: "11-11-20",
        time: '4:41:22 PM',
        amount: 12 + i,
        description: "Note...",
        staff: 'John'
    });
}

export const RowButtonPrint = (props: any) => {
    return (
        <ExportPrint setColumn={props.columns} setDataSource={props.dataSource}/>
    )
};

const ReportTable = () => {
    let {t} = useTranslation();

    const columns = [
        {
            title: t('No'),
            dataIndex: '_id',
            width: 100,
            render: (text: React.ReactNode) => <a href={"/ReportExportDetails/" + 1276923}>{text}</a>
        },
        {
            title: t('Invoice'),
            dataIndex: 'invoice',
            width: 100,
        },
        {
            title: t('Date'),
            dataIndex: 'date',
            width: 100,
        },
        {
            title: t('Time'),
            dataIndex: 'time',
            width: 100,
        },
        {
            title: t('Amount'),
            dataIndex: 'amount.normalized',
            width: 100,
        },
        {
            title: t('Type'),
            dataIndex: 'type',
            width: 100,
        },
        {
            title: t('Staff'),
            dataIndex: 'staff',
            width: 100,
        },
    ];

    const [state, setState] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    const fetchDateApi = () => {
        setLoading(true)
        // fetch(url + '/exports')
        //     .then(resp => {
        //         return resp.json();
        //     })
        //     .then(r => {
        //         setState(r);
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         message.error(error + '', 50);
        //     });

        fetchApi("/adjustments?page=0&report=true", "GET")
            .then(r => {
                return r.json()
            })
            .then(resp => {
                setState(resp.data)
                setLoading(false);
                console.log(resp.data)
            })
            .catch(error => {
                message.error(error + '', 50);
            });

    }

    React.useEffect(() => {
        fetchDateApi()
    }, []);

    return (
        <Container>
            <TableCustom
                loading={loading}
                columns={columns}
                dataSource={state}
                rowKey="_id"
            />
        </Container>
    )
}


const ReportExport = () => {
    return (
        <MainLayout>
            <ReportTable/>
        </MainLayout>
    )
}


export default ReportExport;