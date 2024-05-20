import React, { useState } from 'react';
import { Col, Row, Menu, Dropdown, Button } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import SquareBox from './squareBox/squareBox';
import SquareBox1 from './squareBox/squareBox1';
import SquareBox2 from './squareBox/squareBox2';

interface ListTrayProps {
  onBoxClick: () => void;
}

const ListTray: React.FC<ListTrayProps> = ({ onBoxClick }) => {
  const [divs, setDivs] = useState<string[]>(['x', 'y', 'z']); 
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleAdd = (value: string) => {
    setDivs([...divs, value]); 
  };

  const handleBoxClick = (index: number) => {
    setClickedIndex(index);
    onBoxClick();
  };

  const colStyle = {
    border: '1px solid black',
    height: '120px',
    width: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1vh',
    borderRadius: '5px',
  };

  const menu = (
    <Menu style={{ width: '20vw', marginLeft: '5vw', marginBottom: '-10vh' }}>
      {[
        { key: '1', label: '비타민 A', value: 'x' },
        { key: '2', label: '비타민 D', value: 'y' },
        { key: '3', label: '비타민 D2', value: 'z' },
        { key: '4', label: '비타민D3', value: 'z' },
        { key: '5', label: '비타민 E', value: 'z' },
        { key: '6', label: '비타민 K', value: 'z' },
        { key: '7', label: '비타민 K1', value: 'z' },
        { key: '8', label: '비타민 K2', value: 'z' },
        { key: '9', label: '비타민 B1', value: 'z' },
      ].map((item) => (
        <Menu.Item key={item.key}>
          <Row justify="space-between" align="middle">
            <Col>
              <span>{item.label}</span>
            </Col>
            <Col>
              <Button
                type="primary"
                shape="round"
                onClick={() => handleAdd(item.value)}
                style={{ marginLeft: '10px', backgroundColor: "#636363" }}
              >
                추가
              </Button>
            </Col>
          </Row>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '2vh 1vh',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      {divs.map((value, index) => {
        switch (value) {
          case 'x':
            return (
              <SquareBox
                key={index}
                isClicked={clickedIndex === index}
                onClick={() => handleBoxClick(index)}
              />
            );
          case 'y':
            return (
              <SquareBox1
                key={index}
                isClicked={clickedIndex === index}
                onClick={() => handleBoxClick(index)}
              />
            );
          case 'z':
            return (
              <SquareBox2
                key={index}
                isClicked={clickedIndex === index}
                onClick={() => handleBoxClick(index)}
              />
            );
          default:
            return null;
        }
      })}

      <Dropdown overlay={menu} trigger={['click']}>
        <Button size="large" style={colStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '120px'}}>
            <PlusSquareOutlined style={{ fontSize: '5vh', marginBottom: '0.2vh' }} />
            <span style={{ marginBottom: '-2vh', marginTop: '1vh' }}>구성 추천</span>
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};

export default ListTray;
