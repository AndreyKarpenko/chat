import React from 'react';
import {Form, Icon, Input} from 'antd';
import {Button, Block} from 'components';

const RegisterForm = () => {
  const success = true;
  return (
    <>
      <Block>
        {
          success
            ?
            <Form onSubmit={() => {}} className="login-form">
              <Form.Item>
                <Input
                  prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Электронный адресс"
                />
              </Form.Item>
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
                <Input
                  prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  type="password"
                  placeholder="Подтвердите пароль"
                />
              </Form.Item>
              <Form.Item>
                <Button type='primary' size='large' htmlType='submit'>
                  Зарегистрироваться
                </Button>
              </Form.Item>
            </Form>
            :
            <div className='auth__success-block'>
              <div>
                <Icon style={{ fontSize: '50px' }} type='info-circle' theme='twoTone'/>
              </div>
              <h3>Подтвердите свой аккаунт</h3>
              <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
            </div>
        }
      </Block>
    </>
  );
};

export default RegisterForm;
