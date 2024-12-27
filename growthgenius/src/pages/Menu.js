import React from 'react';
import { Table, Card, Typography, Tag } from 'antd';
import { StarOutlined, LikeOutlined } from '@ant-design/icons';

const { Title } = Typography;

// Sample menu data
const menuData = [
  {
    key: '1',
    product: 'Margherita Pizza',
    price: 10.99,
    likes: 120,
    rating: 4.5,
  },
  {
    key: '2',
    product: 'Pepperoni Pizza',
    price: 12.99,
    likes: 150,
    rating: 4.8,
  },
  {
    key: '3',
    product: 'Caesar Salad',
    price: 7.99,
    likes: 90,
    rating: 4.3,
  },
  {
    key: '4',
    product: 'Spaghetti Bolognese',
    price: 14.99,
    likes: 200,
    rating: 4.9,
  },
  {
    key: '5',
    product: 'Tiramisu',
    price: 5.99,
    likes: 180,
    rating: 4.7,
  },
];

const Menu = () => {
  // Table columns definition
  const columns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`, // Format price
    },
    {
      title: 'Likes',
      dataIndex: 'likes',
      key: 'likes',
      render: (likes) => (
        <span>
          <LikeOutlined style={{ color: '#52c41a' }} /> {likes}
        </span>
      ),
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <span>
          <StarOutlined style={{ color: '#fadb14' }} /> {rating.toFixed(1)}
        </span>
      ),
    },
  ];

  return (
    <div className="menu-container">
      <Title level={2}>Menu</Title>
      <Card>
        <Table
          columns={columns}
          dataSource={menuData}
          pagination={{ pageSize: 5 }}
        />
      </Card>
    </div>
  );
};

export default Menu;
