/**
 * ...
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Text,
  InputStyled,
  InputPassword,
  Flex,
  Checkboxstyled,
  ButtonStyled,
  LinkStyled,
} from './stylesLogin';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actionsLogin';
import reducer from './reducerLogin';
import saga from './sagaLogin';
import { REDUX_KEY } from './constantsLogin';
import { COOKIES } from '../../utils/constants';

const key = REDUX_KEY;
const Login = () => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const history = useHistory();
  const dispatch = useDispatch();

  const onClickLogin = () => {
    const body = {
      username: 'anhduong',
      password: 'Agency@2022',
    };
    dispatch(
      actions.login(body, res => {
        Cookies.set(COOKIES.accessToken, res.access_token);
        history.push('/account-management');
      }),
    );
  };

  return (
    <Container>
      <Wrapper>
        <Text fw="600" fs="24px" pad="28px 0" className="titlecenter">
          Đăng Nhập Hệ Thống Đại Lý
        </Text>
        <InputStyled
          placeholder="Email hoặc số điện thoại"
          className="margin"
        />
        <InputPassword placeholder="Mật khẩu" className="margin" />
        <Flex direction="row" wrap="wrap" mgb="24px">
          <Checkboxstyled className="marginright" />
          <Text>Đồng ý với </Text>
          <LinkStyled> Điều khoản sử dụng</LinkStyled>
        </Flex>
        {/* eslint-disable-next-line react/prop-types */}
        <ButtonStyled className="margin" onClick={onClickLogin}>
          <Text fw="600" className="buttontext">
            Đăng nhập
          </Text>
        </ButtonStyled>
        <Flex justify="space-between">
          <LinkStyled>Đăng ký</LinkStyled>
          <LinkStyled>Quên Mật Khẩu</LinkStyled>
        </Flex>
      </Wrapper>
    </Container>
  );
};

export default Login;
