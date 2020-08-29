import {Dropdown, Menu, Tag} from "antd";
import {DefaultLanguage} from "utils/i18n";
import React from "react";
import {DownOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

interface TranslateProps {
    key: string;
    title: string;
}

const translate: TranslateProps[] = [
    {
        key: 'en',
        title: 'English'
    },
    {
        key: 'kh',
        title: 'Khmer'
    }
];

const MenuLanguage = () => {
    const {t} = useTranslation();

    const handleChange = ({key}: any) => {
        localStorage.setItem('lang', key);
        window.location.reload();
    }
    const menu = (
        <Menu onClick={handleChange} style={{width: 100}} defaultSelectedKeys={[DefaultLanguage!]}>
            {translate.map(item => (
                <Menu.Item key={item.key}>
                    {t(item.title)}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
              <Tag>{DefaultLanguage} <DownOutlined style={{fontSize: 10}}/></Tag>
            </span>
        </Dropdown>
    )
}
export default MenuLanguage;