import React, { useState } from 'react';
import {
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
} from '@ant-design/icons';

import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router';

const { Content, Sider } = Layout;

const items = [
    {
        key: '/dashboard',
        label: 'Dashboard',
        icon: <PieChartOutlined />,
    },
    {
        key: '/employee',
        label: 'Employee',
        icon: <TeamOutlined />,
    },
    {
        key: '/customer',
        label: 'Customer',
        icon: <UserOutlined />,
        children: [
            {
                key: '/customer/product',
                label: 'Product',
                icon: <FileOutlined />,
            },
        ],
    },
    {
        key: '/product',
        label: 'Product',
        icon: <PieChartOutlined />,
        children: [
            {
                key: '/product/category',
                label: 'Category',
                icon: <FileOutlined />,
            },
        ],
    },
];

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Selected Menu តាម URL បច្ចុប្បន្ន
    const selectedKeys = [location.pathname];

    // បើចូល Sub Menu ឱ្យ Parent Menu បើក
    const openKeys = location.pathname.startsWith('/customer')
        ? ['/customer']
        : location.pathname.startsWith('/product')
            ? ['/product']
            : [];

    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    {!collapsed && 'MY SYSTEM'}
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    items={items}
                    selectedKeys={selectedKeys}
                    defaultOpenKeys={openKeys}
                    onClick={({ key }) => navigate(key)}
                />
            </Sider>

            <Layout>
                <div className='h-14 w-full bg-white shadow'>
                    <section>
                        
                    </section>
                </div>
                <Content style={{ margin: '16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>

        </Layout>
    );
};

export default MainLayout;