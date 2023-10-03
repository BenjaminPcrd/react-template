import { useAuthContext } from "@/data/authentication";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { FormattedMessage, useIntl } from "react-intl";
import styles from "./main.module.css";

type LoginForm = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login = () => {
  const { formatMessage } = useIntl();
  const { error, loading, login } = useAuthContext();

  const onFinish = (data: LoginForm) => {
    login({
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });
  };

  return (
    <Form<LoginForm> onFinish={onFinish} className={styles["login-form"]}>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="login.form.email.required" />,
          },
          {
            type: "email",
            message: <FormattedMessage id="login.form.email.invalid" />,
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className={styles["login-form-icon"]} />}
          placeholder={formatMessage({ id: "login.form.email" })}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: <FormattedMessage id="login.form.password.required" />,
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className={styles["login-form-icon"]} />}
          placeholder={formatMessage({ id: "login.form.password" })}
        />
      </Form.Item>
      <Form.Item name="rememberMe" valuePropName="checked">
        <Checkbox>
          <FormattedMessage id="login.form.remember-me" />
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={!!loading}
          className={styles["login-form-button"]}
        >
          <FormattedMessage id="login.form.login" />
        </Button>
      </Form.Item>
      {error}
    </Form>
  );
};
