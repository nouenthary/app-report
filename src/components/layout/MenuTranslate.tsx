import {Dropdown, Menu} from "antd";
import {DefaultLanguage} from "utils/i18n";
import React from "react";
import {GlobalOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import styled from 'styled-components';
import {useWindowSize} from "../utils/useWindowSize";
import {SMALL_SCREEN} from "utils/constrans";

const ContainerLanguage = styled.span`
    float: right;  
    @media (max-width: 720px){
        margin-right: 20px;
    }
`;

const Text = styled.span`
  padding-left: 10px;
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

    const [width] = useWindowSize();

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
                    <GlobalOutlined style={{fontSize: 16}}/>
                    {width < SMALL_SCREEN ? null : <Text>{DefaultLanguage === 'kh' ? t('Khmer') : t('English')}</Text>}
                </span>
            </Dropdown>
        </ContainerLanguage>
    )
};
export default MenuLanguage;