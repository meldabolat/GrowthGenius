import React from 'react';
import { Layout, Input, Avatar, Badge, Popover, List, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const { Header } = Layout;

// Örnek bildirim verileri
const notifications = [
  { id: 1, message: 'Yeni bir mesaj aldınız.' },
  { id: 2, message: 'Profiliniz güncellendi.' },
  { id: 3, message: 'Yeni bir takipçi kazandınız.' },
];

const Navbar = () => {
  return (
    <Header
      style={{
        background: '#fff',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      {/* Arama Çubuğu */}
      <Input.Search
        placeholder="Arama yap..."
        style={{
          width: '60%',
          margin: '0 auto',
          maxWidth: '500px',
        }}
      />

      {/* Profil ve Bildirim Alanı */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Bildirim Simgesi */}
        <Popover
          placement="bottomRight"
          title="Bildirimler"
          content={
            <List
              size="small"
              dataSource={notifications}
              renderItem={(item) => <List.Item>{item.message}</List.Item>}
            />
          }
          trigger="click"
        >
          <Badge count={notifications.length} overflowCount={99}>
            <BellOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Badge>
        </Popover>

        {/* Profil Fotoğrafı */}
        <Avatar
          size="large"
          src="https://joeschmoe.io/api/v1/random" // Profil fotoğrafı, değiştirebilirsiniz
        />
      </div>
    </Header>
  );
};

export default Navbar;
