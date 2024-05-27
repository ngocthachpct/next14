'use client'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ImSpoonKnife } from 'react-icons/im'; // Import the icon
import './LoginForm.css'; // Make sure to import the CSS file

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm = () => (
    <div className="login-container">
        <div className="login-form-container">
            <div className="logo-container">
                <ImSpoonKnife className="logo" /> {/* Use the icon here */}
                <span className="logo-text">ABCX</span> {/* Text below the icon */}
            </div>
            <Form
                name="basic"
                className='login-form'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 0, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                    <div className="below-button-text">AAAA</div>
                </Form.Item>
            </Form>
        </div>
    </div>
);

export default LoginForm;
