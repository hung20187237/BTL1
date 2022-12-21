/**
 * ...
 */

import React from 'react';
import { InputCustom } from '../../res/components/Input/styles';
import {
  Container,
  Wrapper,
  Text,
  InputStyled,
  InputPassword,
  Flex,
  Checkboxstyled,
  Link,
  ButtonStyled,
} from './stylesLogin';

const Login = () => (
  <Container>
    <Wrapper>
      <Text fw="600" fs="24px" pad="28px 0" className="titlecenter">
        Đăng Nhập Hệ Thống Đại Lý
      </Text>
      <InputStyled placeholder="Email hoặc số điện thoại" className="margin" />
      <InputPassword placeholder="Mật khẩu" className="margin" />
      <Flex direction="row" wrap="wrap" mgb="24px">
        <Checkboxstyled className="marginright" />
        <Text>Đồng ý với </Text>
        <Link> Điều khoản sử dụng</Link>
      </Flex>
      <ButtonStyled className="margin">
        <Text fw = '600' className="buttontext">Đăng nhập</Text>
      </ButtonStyled>
        <Flex justify = 'space-between'>
            <Link>Đăng ký</Link>
            <Link>Quên Mật Khẩu</Link>
        </Flex>
    </Wrapper>
  </Container>
);

export default Login;
