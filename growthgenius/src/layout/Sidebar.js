import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  SettingOutlined,
  OpenAIOutlined,
  PaperClipOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ collapsed, onCollapse }) => {
  return (
    <Sider
      width={collapsed ? 80 : 200}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#fff',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/">Ana Sayfa</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<OpenAIOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/sales-report">Analizler</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/profile" >Profil</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SearchOutlined />} style={{ fontSize: '16px' }}>
          Arama
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />} style={{ fontSize: '16px' }}>
         <Link to="/settings">Ayarlar</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
