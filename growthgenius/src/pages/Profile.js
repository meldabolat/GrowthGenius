import React, { useState } from 'react';
import { Card, Avatar, Typography, Button, Modal, Form, Input } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import './Profile.css';

const { Title, Text } = Typography;

const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Full Stack Developer with a passion for creating web applications.',
  });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setProfile({ ...profile, ...values });
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="profile-container">
      <Card
        style={{ width: 300, textAlign: 'center' }}
        actions={[
          <Button icon={<EditOutlined />} onClick={showModal}>
            Edit Profile
          </Button>,
        ]}
      >
        <Avatar
          size={100}
          icon={<UserOutlined />}
          style={{ marginBottom: 16 }}
        />
        <Title level={4}>{profile.name}</Title>
        <Text>{profile.email}</Text>
        <br />
        <Text type="secondary">{profile.bio}</Text>
      </Card>

      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={profile}
          onFinish={handleOk}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Bio" name="bio">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
