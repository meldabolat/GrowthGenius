import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../src/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from '../src/layout/Navbar';
import SalesReport from './pages/SalesReport'; // Sales Report bileşenini dahil et
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} onCollapse={handleCollapse} />

        {/* Main Layout */}
        <Layout style={{ marginLeft: collapsed ? 80 : 200 }}>
          {/* Navbar */}
          <Navbar />

          {/* Content */}
          <Content
            style={{
              padding: '24px',
              minHeight: '100%',
              marginTop: 0,
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales-report" element={<SalesReport />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
