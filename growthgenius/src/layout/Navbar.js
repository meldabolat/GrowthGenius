import React from 'react';
import { Layout, Input, Avatar } from 'antd';

const { Header } = Layout;

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
      
      {/* Profil Fotoğrafı */}
      <Avatar
        size="large"
        src="https://joeschmoe.io/api/v1/random" // Profil fotoğrafı, bunu değiştirebilirsiniz
      />
    </Header>
  );
};

export default Navbar;
