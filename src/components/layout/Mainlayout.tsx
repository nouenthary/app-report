import React from 'react';
import {Layout} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import MenuSider from "./MenuSider";
import DrawerMenu from "./DrawerMenu";
import styled from "styled-components";
import {withTranslation} from "react-i18next";
import MenuLanguage from "./MenuTranslate";
import {ThemeContext} from "context/ThemeProvider";

const {Header, Sider, Content} = Layout;

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
    static contextType = ThemeContext;

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
        const {theme} = this.context
        const HeaderStyle = {
            paddingLeft: 15,
            color: theme === 'light' ? '#001529' : '#fff',
            background: theme === 'light' ? '#fff' : '#001529'
        }
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
                    <Header className="site-layout-background" style={HeaderStyle}>
                        <span id="icon-drawer-big" style={{fontSize: 20}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => this.showDrawer()
                            })}
                        </span>
                        <MenuLanguage/>
                    </Header>
                    <Content style={ContentStyle}>
                        {this.props.children}
                    </Content>
                </Layout>
                <DrawerMenu visible={this.state.visible} onClose={this.onClose}/>
            </Layout>
        );
    }
}

export default withTranslation()(MainLayout);