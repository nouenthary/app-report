import React from 'react';
import {Layout, Menu, Drawer} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import {Link} from "react-router-dom";
import styled from "styled-components";

const Title = styled.span`
    padding-left: 20px;
    
    @media (max-width: 720px){
        display: none;
    }
`;

const {Header, Sider, Content} = Layout;

const Height = {
    height: "100vh"
}

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

    onClose = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <Layout style={Height}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo">
                        <h1 style={{textAlign: "center", color: "#fff"}}>Main Report</h1>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to={`/income`}>Income</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link to={`/export`}>Export</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            <Link to={`/report`}>Report</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{paddingLeft: 15}}>
                        <span id="icon-drawer-big">
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </span>

                        <span id="icon-drawer-small" onClick={() => this.setState({visible: true})}>
                            <MenuUnfoldOutlined/>
                        </span>

                        <Title> Report Management</Title>
                    </Header>
                    <Content
                        // className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}

                        <Drawer title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>

                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;