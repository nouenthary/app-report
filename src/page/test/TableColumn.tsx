import React, {useEffect, useState} from "react";
import MainLayout from "components/layout/Mainlayout";
import {FETCH_DATA_API} from "./service";
import {generatorForTable} from "components/Table/TableFunction";
import MasterTable from "components/Table/MasterTable";

// const getData = () => {
//     fetch("http://localhost:8000/api/categories", {
//         method: "GET",
//         headers: {
//             Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiM2UyOTM5NGVkZTkwMjBmZmJmY2NiZjVmNDVlOTUyNjdkZWIxZmZlY2E4NDJkN2I4YmRmOWY0MmMxYzEwMDg1NWFjM2M1OTNiYzE1OWFlYWEiLCJpYXQiOjE2MDEwOTUyMjUsIm5iZiI6MTYwMTA5NTIyNSwiZXhwIjoxNjE2NzMzNjI0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.m9TnB9nDU3OjXN33FyNx1ksS86WrfbnZwoFf6_iU2kQ8AmPRcebtD2kAuXF7gS1jtmidv8sYseARn4gvDh-naN4KAIjGPXGyLFzS1NIyDJEQlOaq5OwNIYapdFUwPa7kCLacWE85PtX3jVCPYK7dXjBF27x65lBjLXpobejQi-Txxq0Yoqhme3hZoVikrWLutHM-SfLokFlNL-CapxSCuvD95oA9GDx_XJEFumHIA433Kn50wGBA8uo-z6od9ZgwpsEHl9GWOUUyEHnHfIfNQlVaCyE__zICKeKtjYmUOtWEO-KVIq9BQhoho9fObQN_TMtWrIuymyM56uts6sVtdzybB68jqy91Fc3rt-UmE55Hfm6_sG2IJXV-3P_2K5Fl09PilZ7dr699El5NQiq2X6FUSKH8YTAarorGcGa_ryyCm3kVn2Fp_XUxE_EO4a18tdfL-ONRA940ubrpqxv--I5mAk-FDumNgcFMhYAUvLlbzK-6jlb6Hv6tbbW0jKk9fpdWx9PVLcsF3nYRH8dxPlqFa5iQ6qPuL3PKNmB_RkNnH-x3Tblw06PGrFiveMxgXOu8FnMMflpjEsg32fSJYF29dPIzW7iXrBmrUBFOJnPl6YTMJR0rEsOD9jcPDXn2qpFNj8WWs4j-9f4OTBQ828mmw_gxg7KYZrpzWB5Q_wo"
//         }
//     }).then((resp) => {
//         return resp.json();
//     }).then((res) => {
//         console.log(res.data)
//     })
// }

// const login = () => {
//     fetch("http://localhost:8000/api/login", {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({email: 'admin@gmail.com', password: "123456"})
//     }).then((resp) => {
//         return resp.json();
//     }).then((res) => {
//         console.log(res)
//     })
// }

const TableColumn = () => {
    const [state, setState] = useState<any>({
        columns: [],
        data: [],
    });

    useEffect(() => {
        FETCH_DATA_API('/users/data')
            .then((response) => {
                const {data, columns} = generatorForTable(response);
                setState({data, columns});
            })
    }, []);

    return (
        <MainLayout>
            <MasterTable columns={state.columns} dataSource={state.data} rowKey={'id'}/>
        </MainLayout>
    )
}

export default TableColumn;