import React, {useState} from "react";
import {Dropdown, Menu, Drawer} from "antd";
import {DefaultLanguage} from "utils/i18n";
import {GlobalOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import styled from 'styled-components';
import {useWindowSize} from "../utils/useWindowSize";
import {SMALL_SCREEN} from "utils/constrans";
import {useTheme} from "../../context/ThemeProvider";

const ContainerLanguage = styled.span`
    float: right;  
    @media (max-width: 720px){
        margin-right: 20px;
    }
`;

const Text = styled.span`
  padding-left: 10px;
`;

const Container = styled.div`
    padding: 20px;
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

const borderColor = {
    border: 'skyblue 1px solid'
}

const MenuLanguage = () => {
    const {t} = useTranslation();
    const [state, setState] = useState<any>({
        visible: false
    })
    const {theme, setTheme} = useTheme()!;
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

    const showDrawer = () => {
        setState({visible: true});
    };

    const onClose = () => {
        setState({visible: false});
    };

    return (
        <ContainerLanguage>
            <Dropdown overlay={menu}>
                <span className="ant-dropdown-link">
                    <GlobalOutlined style={{fontSize: 16}}/>
                    {width < SMALL_SCREEN ? null : <Text>{DefaultLanguage === 'kh' ? t('Khmer') : t('English')}</Text>}
                </span>
            </Dropdown>
            <ExclamationCircleOutlined style={{fontSize: 16, paddingLeft: 10}} onClick={() => showDrawer()}/>
            <Drawer
                placement="right"
                closable={true}
                onClose={onClose}
                visible={state.visible}
            >
                <Container>
                    <Title>Page style setting</Title>
                    <div style={{display: "flex"}}>
                        <div style={theme === 'light' ? borderColor : undefined}>
                            <img src={'/icon/Light.svg'} alt={'icon'} onClick={() => setTheme('light')}/>
                        </div>
                        <span style={{paddingLeft: 10}}/>
                        <div style={theme === 'dark' ? borderColor : undefined}>
                            <img src={'/icon/Dark.svg'} alt={'icon'} onClick={() => setTheme('dark')}/>
                        </div>
                    </div>
                </Container>
            </Drawer>
        </ContainerLanguage>
    )
};

const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export default MenuLanguage;