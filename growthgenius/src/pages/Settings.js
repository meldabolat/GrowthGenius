import React, { useState } from 'react';
import { Card, Form, Switch, Select, Button, Typography, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './Settings.css';

const { Title } = Typography;
const { Option } = Select;

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSave = (values) => {
    setSettings(values);
    alert('Settings saved successfully!');
  };

  const handlePasswordChange = () => {
    if (password.newPassword !== password.confirmPassword) {
      alert('Passwords do not match!');
    } else {
      alert('Password changed successfully!');
      setPassword({ currentPassword: '', newPassword: '', confirmPassword: '' });
    }
  };

  return (
    <div className="settings-container">
      <Card
        title={<Title level={4}><SettingOutlined /> Settings</Title>}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form
          layout="vertical"
          initialValues={settings}
          onFinish={handleSave}
        >
          {/* Notifications Toggle */}
          <Form.Item label="Enable Notifications" name="notifications" valuePropName="checked">
            <Switch />
          </Form.Item>

          {/* Theme Selection */}
          <Form.Item label="Theme" name="theme">
            <Select>
              <Option value="light">Light</Option>
              <Option value="dark">Dark</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Save Settings
            </Button>
          </Form.Item>
        </Form>

        {/* Password Change */}
        <Title level={5} style={{ marginTop: '24px' }}>Change Password</Title>
        <Form layout="vertical">
          <Form.Item label="Current Password">
            <Input.Password
              value={password.currentPassword}
              onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="New Password">
            <Input.Password
              value={password.newPassword}
              onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
            />
          </Form.Item>
          <Form.Item label="Confirm New Password">
            <Input.Password
              value={password.confirmPassword}
              onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handlePasswordChange} block>
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Settings;
