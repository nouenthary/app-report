import React from "react";
import {Drawer, Menu} from "antd";
import {Link} from "react-router-dom";
import {menu} from "./MenuSider";

const MenuSider = () => {
    return (
        <>
            <Menu
                style={{width: 256}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme={"light"}
            >
                {menu.map(menuItem => (
                    <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                        <Link to={menuItem.link}>{menuItem.text}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <style>
                {`
                    .ant-menu-root.ant-menu-inline {
                         background: none;
                         color: black;
                    }
                `}
            </style>
        </>
    )
}


const DrawerMenu = (props: any) => {
    const {visible, onClose} = props;
    return (
        <>
            <Drawer title="Report"
                    placement="right"
                    closable={false}
                    onClose={() => onClose(false)}
                    visible={visible}>
                <MenuSider/>
            </Drawer>

        </>
    )
}

export default DrawerMenu;