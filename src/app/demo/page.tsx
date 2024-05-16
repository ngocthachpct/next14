'use client';
import React from 'react';
import { Flex, Layout } from 'antd';
import { Button } from 'antd';
import { PlusOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import './page.css';
const { Header, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
  border: '1px solid black',
  marginLeft: '10px',
  marginTop: '20px',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
  marginRight: '10px',
  marginLeft: '40px',
  marginTop: '20px',
};

const headerrStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  minHeight: '10vh',
  color: '#fff',
  backgroundColor: '#F3F1F0',
  marginRight: '10px',
  marginLeft: '10px',
  marginTop: '20px',
};

const BlogsPage: React.FC = () => (
  <Flex gap="middle" wrap="wrap">

    <Layout>
      <Sider width="25%" style={siderStyle}>
        <div id='top-sider' >
          <p><UsergroupAddOutlined />식사 목록</p>
          <Button type="primary" icon={<PlusOutlined />}>
            New accountss
          </Button>
        </div>
        <Header style={headerrStyle}> Search </Header>
        <Content> Content </Content>
      </Sider>
      <Content style={contentStyle}>Content</Content>
    </Layout>

  </Flex>
);

export default BlogsPage;
