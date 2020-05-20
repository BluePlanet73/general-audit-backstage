import React from "react";
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import ProxyMode from "../utils/Route";

export default function LoginPage() {
    const proxyMode = ProxyMode();
    return (
        <Form
            name="normal_login"
            className="login-form flex-column-center"
            initialValues={{remember: true}}
            onFinish={(values) => {
                console.log(values.username);
                console.log(values.password);
                localStorage.setItem("loggedIn", "loggedIn");
                proxyMode.replace('/home');
            }}
        >
            <Form.Item
                name="username"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input className="login-input" prefix={<UserOutlined className="site-form-item-icon"/>}
                       placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{required: true, message: 'Please input your Password!'}]}
            >
                <Input
                    className="login-input"
                    prefix={<LockOutlined className="site-form-item-icon"/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}
