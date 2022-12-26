import { Layout } from 'antd';
import React from 'react';
import { Flex } from '../Login/stylesLogin';
import { BoxIcon, HeaderStyled, IIcon, ImgIcon, SiderStyled } from './stylesHome';
import { Menuicon } from '../../images/icon/Menuicon';

const { Content } = Layout;

export default function index() {
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <HeaderStyled>
        <Flex justify="space-between">
          <Flex className="flexleft">
            <BoxIcon><Menuicon /></BoxIcon>
            
          </Flex>
        </Flex>
      </HeaderStyled>
      <Layout>
        <SiderStyled>Sider</SiderStyled>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
}
