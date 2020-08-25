import React from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {UserOutlined, VideoCameraOutlined} from '@ant-design/icons';

export const menu = [
    {
        key: '1',
        text: 'Import',
        link: '/',
        icon: <UserOutlined/>
    },
    {
        key: '2',
        text: 'Export',
        link: '/export',
        icon: <VideoCameraOutlined/>
    },
    {
        key: '#',
        text: 'Customer',
        link: '/customer',
        icon: <VideoCameraOutlined/>
    }
];

const theme: any = 'dark';
const mode: any = 'inline';
const key: any = '1';

const MenuSider = () => {
    return (
        <Menu theme={theme} mode={mode} defaultSelectedKeys={[key]}>
            {menu.map(menuItem => (
                <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                    <Link to={menuItem.link}>{menuItem.text}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

export default MenuSider;