import React from "react";
import {Drawer, Menu} from "antd";
import {Link} from "react-router-dom";
import {menu, MenuProps} from "./MenuSider";
import {useTranslation, withTranslation} from "react-i18next";

const mode: any = 'inline';
const theme: any = 'light';

const MenuSider = () => {
    const {t} = useTranslation();
    const handlerChange = ({key}: any) => {
        sessionStorage.setItem('menu', key);
    }
    return (
        <Menu
            style={{width: 256}}
            defaultSelectedKeys={[(sessionStorage.getItem('menu') ? sessionStorage.getItem('menu') : '1')!]}
            mode={mode}
            theme={theme}
            onClick={handlerChange}
        >
            {menu.map((menuItem: MenuProps) => (
                <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                    <Link to={menuItem.link}>{t(menuItem.text)}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}

const DrawerMenu = (props: any) => {
    const {visible, onClose, t} = props;
    return (
        <Drawer title={<span style={{color: '#1890ff'}}>{t("Report Management")}</span>}
                placement="left"
                closable={false}
                onClose={() => onClose(false)}
                visible={visible}>
            <MenuSider/>
        </Drawer>
    )
}

export default withTranslation()(DrawerMenu);