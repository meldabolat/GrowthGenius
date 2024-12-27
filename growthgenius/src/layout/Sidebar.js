import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg'
import {
  HomeOutlined,
  UserOutlined,
  SearchOutlined,
  SettingOutlined,
  OpenAIOutlined,
  MenuOutlined,
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
      {/* Logo Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '16px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        
        <img src={logo} alt="Logo"
           // Statik dosya yolunu düzeltin
         
          style={{
            width: collapsed ? 40 : 100, // Boyutlandırma collapsed durumuna göre
            height: 'auto',
            transition: 'width 0.2s ease',
          }}
        />
      </div>

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
        <Menu.Item key="6" icon={<MenuOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/menu">Menü</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<OpenAIOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/sales-report">Analizler</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} style={{ fontSize: '16px' }}>
          <Link to="/profile">Profil</Link>
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
