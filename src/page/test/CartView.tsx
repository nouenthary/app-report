import React from "react";
import MainLayout from "components/layout/Mainlayout";
import {
    Chart,
    Interval,
    Tooltip,
    Axis,
    Coordinate,
    Interaction,
    Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

const Grouped = () => {
    const data = [
        {item: 'PHP', count: 40, percent: 0.4},
        {item: 'Java', count: 21, percent: 0.21},
        {item: 'Python', count: 17, percent: 0.17},
        {item: 'Javascript', count: 13, percent: 0.13},
        {item: 'Kolin', count: 9, percent: 0.09},
    ];

    const cols = {
        percent: {
            formatter: (val: any) => {
                val = val * 100 + '%';
                return val;
            },
        },
    };
    return (
        <Chart height={400} data={data} scale={cols} autoFit onGetG2Instance={(c: any) => {
            c.geometries[0].elements.forEach((e: any, idx: any) => {
                e.setState('selected', idx === 0 ? true : false);
            })
        }}>
            <Coordinate type="theta" radius={0.75}/>
            <Tooltip showTitle={false}/>
            <Axis visible={false}/>
            <Interval
                position="percent"
                adjust="stack"
                color="item"
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['count', {
                    content: (data) => {
                        return `${data.item}: ${data.percent * 100}%`;
                    },
                }]}
            />
            <Interaction type='element-single-selected'/>
        </Chart>
    )
}

const Grouper = () => {
    const data = [
        {
            label: "Monday",
            series1: 2800,
            series2: 2260
        },
        {
            label: "Tuesday",
            series1: 1800,
            series2: 1300
        },
        {
            label: "Wednesday",
            series1: 950,
            series2: 900
        },
        {
            label: "Thursday",
            series1: 500,
            series2: 390
        },
        {
            label: "Friday",
            series1: 170,
            series2: 100
        }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
        type: "fold",
        fields: ["series1", "series2"],
        // 展开字段集
        key: "type",
        // key字段
        value: "value" // value字段
    });
    return (
        <Chart height={400} data={dv.rows} forceFit>
            <Legend/>
            <Coordinate actions={[['scale', 1, -1], ['transpose']]}/>
            <Axis
                name="label"
                label={{
                    offset: 12
                }}
            />
            <Axis name="value" position={"right"}/>
            <Tooltip/>
            <Interval
                position="label*value"
                color={"type"}
                adjust={[
                    {
                        type: "dodge",
                        marginRatio: 1 / 32
                    }
                ]}
            />
        </Chart>
    )
}

const CartView = () => {
    return (
        <MainLayout>
            <Grouped/>
            <Grouper/>
        </MainLayout>
    )
}

export default CartView;