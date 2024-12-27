import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, DatePicker, Space } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SalesReport.css';

const { Title } = Typography;

// Sample data for sales report
const salesData = [
  { date: '2024-01-01', product: 'Product A', sales: 1200 },
  { date: '2024-01-02', product: 'Product B', sales: 1500 },
  { date: '2024-01-03', product: 'Product A', sales: 1300 },
  { date: '2024-01-04', product: 'Product C', sales: 1000 },
  { date: '2024-01-05', product: 'Product B', sales: 1700 },
  { date: '2024-01-06', product: 'Product A', sales: 1400 },
  { date: '2024-01-07', product: 'Product C', sales: 1600 },
];

// Sample data for sales trend chart
const trendData = [
  { name: 'Jan', sales: 12000 },
  { name: 'Feb', sales: 15000 },
  { name: 'Mar', sales: 13000 },
  { name: 'Apr', sales: 17000 },
  { name: 'May', sales: 19000 },
  { name: 'Jun', sales: 21000 },
  { name: 'Jul', sales: 24000 },
];

const SalesReport = () => {
  const [dateRange, setDateRange] = useState(null);
  const [filteredData, setFilteredData] = useState(salesData);

  const handleDateChange = (dates) => {
    setDateRange(dates);
    if (dates) {
      const filtered = salesData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= dates[0].toDate() && itemDate <= dates[1].toDate();
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(salesData); // Reset to original data
    }
  };

  // Table columns definition
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
    },
  ];

  return (
    <div className="sales-report-container">
      <Title level={2}>Sales Report</Title>

      {/* Date Picker */}
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Space>
              <DatePicker.RangePicker
                onChange={handleDateChange}
                format="YYYY-MM-DD"
                style={{ width: '300px' }}
              />
            </Space>
          </Card>
        </Col>
      </Row>

      {/* Sales Trend Chart */}
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="Sales Trend">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Sales Data Table */}
        <Col xs={24} md={12}>
          <Card title="Sales Data">
            <Table
              columns={columns}
              dataSource={filteredData}
              rowKey="date"
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SalesReport;
