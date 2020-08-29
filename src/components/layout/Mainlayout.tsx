import React from 'react';
import {Layout} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import MenuSider from "./MenuSider";
import DrawerMenu from "./DrawerMenu";
import styled from "styled-components";
import {withTranslation} from "react-i18next";
import MenuLanguage from "./MenuTranslate";

const {Header, Sider, Content} = Layout;

const Title = styled.span`
    padding-left: 20px;
    
    @media (max-width: 720px){
        display: none;
    }
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #ffffff;
`;
const Height = {
    height: '100vh'
};

const ContentStyle = {
    margin: '24px 16px',
    padding: 24,
    minHeight: 280,
};


class MainLayout extends React.Component<any, any> {
    state = {
        collapsed: false,
        visible: false
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onClose = (visible: boolean) => {
        this.setState({visible: visible});
    }

    showDrawer = () => {
        this.toggle()
        this.setState({visible: true})
    }

    render() {
        let {t} = this.props;
        return (
            <Layout style={Height}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <MainTitle>
                            Main Report
                        </MainTitle>
                    </div>
                    <MenuSider/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{paddingLeft: 15}}>
                        <div>
                        <span id="icon-drawer-big" style={{fontSize: 20}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => this.showDrawer()   // onClick: this.toggle
                            })}
                        </span>

                            {/*<span id="icon-drawer-small" onClick={() => this.setState({visible: true})}>*/}
                            {/*    <MenuUnfoldOutlined/>*/}
                            {/*</span>*/}

                            <Title>{t("Report Management")}</Title>
                            <div style={{float: "right"}}><MenuLanguage/></div>
                        </div>
                    </Header>
                    <Content style={ContentStyle}>
                        {this.props.children}
                        <DrawerMenu visible={this.state.visible} onClose={this.onClose}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withTranslation()(MainLayout);