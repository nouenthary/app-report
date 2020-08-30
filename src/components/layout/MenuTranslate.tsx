import {Dropdown, Menu} from "antd";
import {DefaultLanguage} from "utils/i18n";
import React from "react";
import {GlobalOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import styled from 'styled-components';

const ContainerLanguage = styled.span`
    float: right;  
    margin-top: 25px;
    @media (max-width: 720px){
        margin-top: 15px;
        margin-right: 20px;
    }
`;

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
    };
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
        <ContainerLanguage>
            <Dropdown overlay={menu}>
            <span className="ant-dropdown-link">
               <GlobalOutlined style={{fontSize: 20, float: 'right'}}/>
            </span>
            </Dropdown>
        </ContainerLanguage>
    )
};
export default MenuLanguage;