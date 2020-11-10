import React from "react";
import { Form, Input, Button, Checkbox, Card, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.scss";

const { Option } = Select;

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card title="Sign In" className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="select"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select Doctor or Patient!",
            },
          ]}
        >
          <Select placeholder="Please select">
            <Option value="doctor">Doctor</Option>
            <Option value="patient">Patient</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
