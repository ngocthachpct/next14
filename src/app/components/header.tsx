'use client';
import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, SettingOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Button, Space } from "antd";
import { Menu } from 'antd';
import { ImSpoonKnife } from "react-icons/im";
import './header.css';

type MenuItem = Required<MenuProps>['items'][number];

const CustomLabel: React.FC<{ icon: React.ReactNode, text: string, direction?: 'column' | 'row' }> = ({ icon, text, direction = 'column' }) => (
  <div style={{ display: 'flex', flexDirection: direction, alignItems: 'center' }}>
    {icon}
    <span style={{ marginLeft: direction === 'row' ? 8 : 0 }}>{text}</span>
  </div>
);

const buttonItems: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
  },
  {
    label: '2nd menu item',
    key: '2',
  },
  {
    label: '3rd menu item',
    key: '3',
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  buttonItems,
};

const items: MenuItem[] = [
  {
    label: <CustomLabel icon={<ImSpoonKnife />} text="맞춤형식이 설계" />,
    key: 'BT1',
    style: { color: 'white' },
  },
  {
    label: <CustomLabel icon={<HomeOutlined />} text="홈" direction="row" />,
    key: 'BT2',
    style: { color: 'white' },
  },
  {
    label: <CustomLabel icon={<AppstoreOutlined />} text="식단 관리" direction="row" />,
    key: 'BT3',
    style: { color: 'white' },
  },
  {
    label: <CustomLabel icon={<SettingOutlined />} text="지식 카이브" direction="row" />,
    key: 'BT4',
    style: { color: 'white' },
  },
  {
    label: <CustomLabel icon={<SettingOutlined />} text="기업 아카이브" direction="row" />,
    key: 'BT5',
    style: { color: 'white' },
  },
  {
    label: <CustomLabel icon={<SettingOutlined />} text="고객 지원" direction="row" />,
    key: 'BT6',
    style: { color: 'white' },
  },
  {
    label: (
      
        <Dropdown menu={{ items: buttonItems }}>
        <Button size='large'>
          <Space>
          김영양
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    ),
    key: 'BT7',
    style: { color: 'white' },
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('BT1');

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key !== 'BT7') {
      setCurrent(e.key);
    }
  };

  return (
    <div className="menu-container">
      <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items.slice(0, 2)} className="menu-group-left" />
      <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items.slice(2, 6)} className="menu-group-center" />
      <Menu onClick={onClick} selectedKeys={[current]} mode= "horizontal" items={items.slice(6)} className="menu-group-right" />
    </div>
  );
};

export default Header;
