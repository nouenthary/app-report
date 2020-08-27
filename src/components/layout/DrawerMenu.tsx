import React from "react";
import {Drawer, Menu} from "antd";
import {Link} from "react-router-dom";
import {menu} from "./MenuSider";

const key: any = '1';
const mode: any = 'inline';
const theme: any = 'light';

const MenuSider = () => {
    return (
        <>
            <Menu
                style={{width: 256}}
                defaultSelectedKeys={[key]}
                mode={mode}
                theme={theme}
            >
                {menu.map(menuItem => (
                    <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                        <Link to={menuItem.link}>{menuItem.text}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </>
    )
}


const DrawerMenu = (props: any) => {
    const {visible, onClose} = props;
    return (
        <>
            <Drawer title="Report"
                    placement="left"
                    closable={false}
                    onClose={() => onClose(false)}
                    visible={visible}>
                <MenuSider/>
            </Drawer>

        </>
    )
}

export default DrawerMenu;