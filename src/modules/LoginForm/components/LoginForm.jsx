import React from 'react';
import {Form, Icon, Input} from 'antd';
import {Button, Block} from 'components';
import {Link} from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <div className='auth__top'>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form onSubmit={() => {
        }} className="login-form">
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
              placeholder="Имя пользователя"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' size='large' htmlType='submit'>
              Войти в Аккаунт
            </Button>
          </Form.Item>
          <Link className='auth__register-link' to={'/register'}>
            Зарегистироваться
          </Link>
        </Form>
      </Block>
    </>
  );
};

export default LoginForm;
