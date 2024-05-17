"use client";
import React from "react";
import { Flex, Layout, Button, Form, Input, Select, Row, Space } from "antd";
import {
  PlusOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./page.css";
import Search from "../components/search";
import ListItem from "../components/listItem";
import HookUsage from "../components/inputNumber";
import Item from "antd/es/list/Item";
import ListTray from "../components/listTray";

const { Sider, Content } = Layout;
const { Option } = Select;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "100vh",
  lineHeight: "120px",
  color: "black",
  backgroundColor: "white",
  border: "1px solid black",
  marginLeft: "10px",
  marginTop: "20px",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
  marginRight: "10px",
  marginLeft: "40px",
  marginTop: "10px",
};

const BlogsPage: React.FC = () => (
  <Flex gap="middle" wrap="wrap">
    <Layout>
      <Sider width="25%" style={siderStyle}>
        <div id="top-sider">
          <p>
            <UsergroupAddOutlined />
            식사 목록
          </p>
          <Button type="primary" icon={<PlusOutlined />}>
            New accountss
          </Button>
        </div>
        <div id="center-sider">
          <Search />
        </div>
        <ListItem />
      </Sider>
      <Content style={contentStyle}>
        <Form>
          <div id="form1">
            <Form.Item
              label="URL"
              rules={[
                { type: "url", warningOnly: true },
                { type: "string", min: 6 },
              ]}
            />
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
              label="Field C"
              name={["address", "province"]}
              rules={[{ message: "Province is required" }]}
            >
              <Select
                placeholder="Select province"
                style={{ width: "50vh", display: "flex" }}
              >
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>
          </div>
          <div
            id="form2"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              type="primary"
              shape="round"
              icon={<SettingOutlined />}
              size="middle"
              style={{ marginRight: "10vh" }} // Add this line to set the right margin to 20px
            >
              상세한 영양 기준 설정
            </Button>
          </div>
          <div id="form3">
            <div id="form3A">
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
                <HookUsage />
              </Row>
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
                <HookUsage />
              </Row>
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
              </Row>
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
                <HookUsage />
              </Row>
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
                <HookUsage />
              </Row>
              <Row>
                <Item>칼로리</Item>
                <HookUsage />
              </Row>
            </div>
            <div id="form3B">
              <Form.Item label="Field A">
                <Input placeholder="input placeholder" />
              </Form.Item>
            </div>
            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  shape="round"
                  icon={<SettingOutlined />}
                  size="middle"
                  style={{ marginRight: "10vh" }}
                >
                  상세한
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  icon={<SettingOutlined />}
                  size="middle"
                  style={{ marginRight: "10vh" }}
                >
                  상세한
                </Button>
              </Space>
            </Form.Item>
          </div>
          <div id="form4">
            <ListTray />
          </div>
        </Form>
      </Content>
    </Layout>
  </Flex>
);

export default BlogsPage;
