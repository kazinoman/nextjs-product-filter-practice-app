"use client";

import { Form, Input, Button, Spin, message } from "antd";
import { loginActions } from "./_actions";
import { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    setLoading(true);

    const res = await loginActions(values);
    console.log(res);

    if (res?.error) {
      messageApi.error(res?.message);
    } else {
      messageApi.success("Login Successful!");
    }

    setLoading(false);
  };

  return (
    <Form name="login_form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Spin fullscreen spinning={loading} />
      <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      {contextHolder}
    </Form>
  );
};

export default LoginForm;
