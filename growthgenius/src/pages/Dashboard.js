import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import './Dashboard.css';

const { Title } = Typography;

// Sample data for the dashboard
const sampleData = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
  { name: 'Jul', sales: 3490, revenue: 4300 },
];

// Customer data for BarChart
const customerData = [
  { month: 'Jan', year2023: 100, year2024: 120 },
  { month: 'Feb', year2023: 150, year2024: 170 },
  { month: 'Mar', year2023: 200, year2024: 230 },
  { month: 'Apr', year2023: 180, year2024: 220 },
  { month: 'May', year2023: 210, year2024: 250 },
  { month: 'Jun', year2023: 230, year2024: 280 },
  { month: 'Jul', year2023: 250, year2024: 300 },
  { month: 'Aug', year2023: 220, year2024: 270 },
  { month: 'Sep', year2023: 240, year2024: 290 },
  { month: 'Oct', year2023: 260, year2024: 320 },
  { month: 'Nov', year2023: 280, year2024: 340 },
  { month: 'Dec', year2023: 300, year2024: 360 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Title level={2} className="dashboard-title">
        Dashboard
      </Title>

      <Row gutter={[16, 16]}>
        {/* KPI Cards */}
        <Col xs={24} sm={12} md={6}>
          <Card className="kpi-card1">
            <Title level={4}>Total Sales</Title>
            <Title level={3}>$50,000</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="kpi-card2">
            <Title level={4}>Total Revenue</Title>
            <Title level={3}>$120,000</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="kpi-card3">
            <Title level={4}>New Customers</Title>
            <Title level={3}>1,200</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card className="kpi-card4">
            <Title level={4}>Monthly Growth</Title>
            <Title level={3}>15%</Title>
          </Card>
        </Col>

        {/* Sales and Revenue Chart */}
        <Col xs={24} md={12}>
          <Card className="chart-card">
            <Title level={4} className="chart-title">Sales and Revenue</Title>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Customer Comparison Bar Chart */}
        <Col xs={24} md={12}>
          <Card className="chart-card">
            <Title level={4} className="chart-title">Customer Comparison (2023 vs 2024)</Title>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={customerData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="year2023" fill="#8884d8" />
                <Bar dataKey="year2024" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
