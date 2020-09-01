import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, ExportOutlined, ImportOutlined} from '@ant-design/icons';

export interface MenuProps {
    key: string;
    text: string,
    link: string;
    icon: any;
}

export const menu: MenuProps[] = [
    {
        key: '1',
        text: 'Import',
        link: '/',
        icon: <ExportOutlined/>
    },
    {
        key: '2',
        text: 'Export',
        link: '/export',
        icon: <ImportOutlined/>
    },
    {
        key: '3',
        text: 'Customer',
        link: '/customer',
        icon: <UserOutlined/>
    },
    {
        key: '4',
        text: 'Product',
        link: '/product',
        icon: <UserOutlined/>
    },
    {
        key: '5',
        text: 'Good Received',
        link: '/goods-received',
        icon: <UserOutlined/>
    }
];

const theme: any = 'dark';
const mode: any = 'inline';
const key: any = '1';

const MenuSider = (props: any) => {
    return (
        <Menu theme={theme} mode={mode} defaultSelectedKeys={[key]}>
            {menu.map((menuItem: MenuProps) => (
                <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                    <Link to={menuItem.link}>{menuItem.text}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default MenuSider;