import React from 'react';
import { Col, Row } from 'antd';

const ListTray: React.FC = () => (
  <>
    <Row style={{height: '15vh', marginLeft: '10vh', marginRight: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Col span={6} style={{border: '1px solid black', height: '15vh'}}>col-6</Col>
      <Col span={6} style={{border: '1px solid black', height: '15vh'}}>col-6</Col>
      <Col span={6} style={{border: '1px solid black', height: '15vh'}}>col-6</Col>
      <Col span={6} style={{border: '1px solid black', height: '15vh'}}>col-6</Col>
    </Row>
  </>
);

export default ListTray;