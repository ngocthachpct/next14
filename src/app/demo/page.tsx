"use client";
import React, { useState } from "react";
import { Flex, Layout, Button, Form, Input, Select, Row, Space, Col } from "antd";
import { PlusOutlined, UsergroupAddOutlined, SettingOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import "./page.css";
import Search from "../components/search";
import ListItem from "../components/listItem";
import HookUsage from "../components/inputNumber";
import ListTray from "../components/listTray";
import { FaMagnifyingGlass } from "react-icons/fa6";

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

const BlogsPage: React.FC = () => {
  const [showForm5, setShowForm5] = useState(false);

  const handleBoxClick = () => {
    setShowForm5(true);
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Sider width="20%" style={siderStyle}>
          <div id="top-sider">
            <p style={{ fontWeight: "bold", color: "black" }}>
              <UsergroupAddOutlined />
              식단 목록
            </p>
            <Button type="primary" icon={<PlusOutlined />} style={{ backgroundColor: "white", color: "black", border: "1px solid #636363" }}>
              식단추가
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
              <Row>
                <Col span={1}></Col>
                <Col span={23} style={{ display: "flex", justifyContent: "flex-start", fontWeight: "bolder" }}>식단추가</Col>
              </Row>

              <Row style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                <Col span={1}></Col>
                <Col span={2} style={{ display: "flex", justifyContent: "flex-start" }}>식단명</Col>
                <Col span={17} style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Input placeholder="셀바스에이아이 - 당뇨환자용도시락" />
                </Col>
                <Col span={4}></Col>
              </Row>

              <Row style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                <Col span={1}></Col>
                <Col span={2} style={{ display: "flex", marginTop: "-6vh" }}>식단 설명</Col>
                <Col span={17} style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Input placeholder="셀바스에이아이도시락에 대한 상세 설명입니다." style={{ height: "10vh" }} />
                </Col>
                <Col span={4}></Col>
              </Row>

              <Row style={{ marginTop: "3vh", marginBottom: "3vh" }}>
                <Col span={0.5}></Col>
                <Col span={2} style={{ display: "flex", justifyContent: "flex-start" }}>영양 기준</Col>
                <Col span={20} style={{ display: "flex", justifyContent: "flex-start" }}>
                  <Select placeholder="당뇨환자 식단" style={{ width: "180px" }}>
                    <Option value="0">demo 1</Option>
                    <Option value="1">demo 2</Option>
                  </Select>
                </Col>
              </Row>
            </div>

            <div id="form2">
              <Row>
                <Col span={3}></Col>
                <Col span={5} style={{ display: "flex", justifyContent: "flex-start" }}>영양 기준</Col>
                <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<SettingOutlined />}
                    size="middle"
                    style={{ backgroundColor: "#636363" }}
                  >
                    상세한 영양 기준 설정
                  </Button>
                </Col>
                <Col span={4}></Col>
              </Row>
            </div>

            <div id="form3">
              <div id="form3A">
                <Row>
                  <Col span={2}></Col>
                  <Col span={3} style={{ textAlign: "left" }}>
                    칼로리
                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={1} style={{ fontSize: "20px" }}>~</Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    kcal
                  </Col>
                </Row>
                <Row>
                  <hr style={{ height: "2px", width: "45vw" }}></hr>
                </Row>
                <Row>
                  <Col span={2}></Col>
                  <Col span={3} style={{ textAlign: "left" }}>
                    당류 &emsp;<ExclamationCircleFilled />
                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={1} style={{ fontSize: "20px" }}>~</Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    g
                  </Col>
                </Row>
                <Row>
                  <hr style={{ height: "2px", width: "45vw" }}></hr>
                </Row>
                <Row>
                  <Col span={2}></Col>
                  <Col span={4} style={{ textAlign: "left" }}>
                    단백질
                  </Col>
                  <Col span={6}>

                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    g 이상
                  </Col>
                </Row>
                <Row>
                  <hr style={{ height: "2px", width: "45vw" }}></hr>
                </Row>
                <Row>
                  <Col span={2}></Col>
                  <Col span={3} style={{ textAlign: "left" }}>
                    지방 &emsp;<ExclamationCircleFilled />
                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={1} style={{ fontSize: "20px" }}>~</Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    g
                  </Col>
                </Row>
                <Row>
                  <hr style={{ height: "2px", width: "45vw" }}></hr>
                </Row>
                <Row>
                  <Col span={2}></Col>
                  <Col span={3} style={{ textAlign: "left" }}>
                    포화지방 &emsp;<ExclamationCircleFilled />
                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={1} style={{ fontSize: "20px" }}>~</Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    g
                  </Col>
                </Row>
                <Row>
                  <hr style={{ height: "2px", width: "45vw" }}></hr>
                </Row>
                <Row>
                  <Col span={2}></Col>
                  <Col span={4} style={{ textAlign: "left" }}>
                    나트륨
                  </Col>
                  <Col span={6}>

                  </Col>
                  <Col span={6}>
                    <HookUsage />
                  </Col>
                  <Col span={6} style={{ textAlign: "left" }}>
                    mg 이하
                  </Col>
                </Row>
              </div>
              <div id="form3B">
                <Row>
                  <Col span={6} style={{ textAlign: "left", width: '28vw' }}>영양소 추가</Col>
                  <Col span={14} style={{ textAlign: "left" }}>
                    <Input suffix={<FaMagnifyingGlass />} />
                  </Col>
                  <Col span={4}></Col>
                </Row>
              </div>
              <div id="form3C">
                <Button
                  type="primary"
                  shape="round"
                  size="middle"
                  style={{ marginRight: "10vh", width: "10vw", backgroundColor: "#636363" }}
                >
                  저장
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  size="middle"
                  style={{ marginRight: "10vh", width: "10vw", backgroundColor: "#636363" }}
                >
                  취소
                </Button>
              </div>
            </div>
            <div id="form4">
              <ListTray onBoxClick={handleBoxClick} />
            </div>
            {showForm5 && (
              <div id="form5" className="form-container">
                <Row className="row-container">
                  <Col span={3} className="left-col">
                    <Row>주식</Row>
                    <Row>국/탕</Row>
                    <Row>반찬</Row>
                  </Col>
                  <Col span={1} className="center-col"></Col>
                  <Col span={20} className="right-col">
                    <Row style={{display: 'flex',  justifyContent: 'flex-start' ,marginLeft: '2vw'}}>포함 (별도용기)</Row>
                    <Row style={{display: 'flex',  justifyContent: 'flex-start' ,marginLeft: '2vw'}}>비포함</Row>
                    <Row style={{display: 'flex',  justifyContent: 'flex-start' ,marginLeft: '2vw'}}>4개</Row>
                  </Col>
                </Row>
              </div>
            )}
          </Form>
        </Content>
      </Layout>
    </Flex>
  );
};

export default BlogsPage;
