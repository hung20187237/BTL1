/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import { Avatar, Layout, message, Popconfirm, Popover } from 'antd';
import { UserAddOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import Login from '../Login/LoadableLogin';
import Home from '../Home/LoadableHome';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { normalTheme } from '../../themes/normalTheme';
import { COOKIES } from '../../utils/constants';
import {
  Box,
  BoxIcon,
  HeaderStyled,
  ImgIcon,
  MenuItem,
  SiderStyled,
} from '../Home/stylesHome';
import { ButtonStyled, Flex, InputStyled, Text } from '../Login/stylesLogin';
import { Menuicon } from '../../images/icon/Menuicon';
import logoicon from '../../images/Group 12752.png';
import { Personalicon } from '../../images/icon/Personalicon';
import { Accounticon } from '../../images/icon/Accounticon';
import { Travelicon } from '../../images/icon/Travelicon';
import { Gifticon } from '../../images/icon/Gifticon';
import { Groupicon } from '../../images/icon/Groupicon';
import { Charticon } from '../../images/icon/Charticon';
import { Cardicon } from '../../images/icon/Cardicon';
import { Noteicon } from '../../images/icon/Noteicon';
import { Shoppingicon } from '../../images/icon/Shopingicon';
import { Hearticon } from '../../images/icon/Hearticon';
import { Bookicon } from '../../images/icon/Bookicon';
import Product from '../Product';
import { PopoverStyled } from './stylesApp';
import { Editicon } from '../../images/icon/Editicon';
import { Keyicon } from '../../images/icon/Keyicon';
import { Shareicon } from '../../images/icon/Shareicon';

const ContainerNotLogin = ({ component: Component }) => {
  const token = Cookies.get(COOKIES.accessToken);

  return (
    <Route
      render={() =>
        !token ? <Component /> : <Redirect to="/account-management" />
      }
    />
  );
};
ContainerNotLogin.propTypes = {
  component: PropTypes.object,
};

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    label,
    type,
  };
}

const items = [
  getItem('Qu???n l?? t??i kho???n', 'grp1', <Accounticon />),
  getItem('Qu???n l?? s???n ph???m', 'grp2', <Travelicon />),
  getItem('Qu???n l?? qu??', 'grp3', <Gifticon />),
  getItem('Qu???n l?? nh??m quy???n', 'grp4', <Groupicon />),
  getItem('Th???ng k??', 'grp5', <Charticon />),
  getItem('Qu???n l?? lo???i th???', 'grp6', <Cardicon />),
  getItem('Qu???n l?? th??ng b??o', 'grp7', <Noteicon />),
  getItem('Qu???n l?? ????n ?????t h??ng', 'grp8', <Shoppingicon />),
  getItem('Qu???n l?? Heath Check', 'grp9', <Hearticon />),
  getItem('H?????ng d???n s??? d???ng ', 'grp10', <Bookicon />),
];

const ContainerLogin = ({ component: Component }) => {
  const token = Cookies.get(COOKIES.accessToken);
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  const handleLogOut = () => {
    Cookies.remove(COOKIES.accessToken);
    history.push('/');
  };
  const handleMenuClick = e => {
    console.log(e.key);
    if (e.key === 'grp1') {
      history.push('/account-management');
    }
    if (e.key === 'grp2') {
      history.push('/product-management');
    }
  };

  const onHide = () => {
    setCollapsed(!collapsed);
  };

  const Title = () => {
    const [active, setActive] = useState(true);
    const activeacount = () => {
      setActive(!active);
    };

    return (
      <Box pd="16px 0 0 0">
        <Box className="BoxPopover">
          <Avatar
            size={64}
            icon={<UserOutlined />}
            style={{ marginBottom: '8px' }}
          />
          <Text color="#FFA13A">Hanoicomputer</Text>
          <Text>C??ng ty TNHH M??y T??nh H?? N???i</Text>
          <Text>(T??i kho???n ???????c t???o b???i Metadata - C??ng ty CP Metadata)</Text>
        </Box>
        <Box maxWidth="372px" pd="6px 0">
          <Flex mgb="10px">
            <Box pd="12px">
              <Avatar icon={<UserOutlined />} />
            </Box>
            <Box className="BoxGrid">
              <Text>Trananh0901</Text>
              <Text>Tr???n Trung Anh</Text>
              <Text>
                (T??i kho???n ???????c t???o b???i Trananhcomputer - C??ng ty TNHH M??y t??nh
                Tr???n Anh)
              </Text>
            </Box>
          </Flex>
          {active ? (
            <Flex mgb="10px" onClick={activeacount}>
              <Box pd="12px">
                <Avatar icon={<UserOutlined />} />
              </Box>
              <Box className="BoxGrid">
                <Text>TungNTK</Text>
                <Text>Nguy???n Thanh T??ng</Text>
                <Text>
                  (T??i kho???n ???????c t???o b???i Global - C??ng ty TNHH Global)
                </Text>
              </Box>
            </Flex>
          ) : (
            <Box mgb="10px" background="#F2F2F3" onClick={activeacount}>
              <Flex>
                <Box pd="12px">
                  <Avatar icon={<UserOutlined />} />
                </Box>
                <Box className="BoxGrid">
                  <Text>TungNTK</Text>
                  <Text>Nguy???n Thanh T??ng</Text>
                  <Text>
                    (T??i kho???n ???????c t???o b???i Global - C??ng ty TNHH Global)
                  </Text>
                </Box>
              </Flex>
              <Flex justify="space-between" pd="0 50px">
                <ButtonStyled key="back" className="buttonesc" wid="120px">
                  ????ng nh???p
                </ButtonStyled>
                <ButtonStyled key="submit" className="buttonadd" wid="120px">
                  X??a t??i kho???n
                </ButtonStyled>
              </Flex>
            </Box>
          )}
          <Flex>
            <BoxIcon>
              <UserAddOutlined style={{ fontSize: 20 }} />
            </BoxIcon>
            <Text pad="0 10px">Th??m T??i kho???n</Text>
          </Flex>
        </Box>
      </Box>
    );
  };
  const Content = () => (
    <Box pd="0 0 16px 0">
      <Flex>
        <Editicon />
        <Text pad="12px 16px">Ch???nh s???a th??ng tin T??i kho???n</Text>
      </Flex>
      <Flex>
        <Keyicon />
        <Text pad="12px 16px">?????i m???t kh???u</Text>
      </Flex>
      <Flex>
        <Shareicon />
        <Text pad="12px 16px">Chia s??? d??? li???u</Text>
      </Flex>
      <Box pd="12px 40px">
        <ButtonStyled key="back" className="buttonesc margin">
          ?????i m???t kh???u
        </ButtonStyled>
        <ButtonStyled key="submit" className="buttonadd" onClick={handleLogOut}>
          Log out
        </ButtonStyled>
      </Box>
    </Box>
  );

  if (!token) return <Redirect to="/login" />;
  // if (render === 'grp2') return <Redirect to="/product-management" />;

  return (
    <Route
      render={() => (
        <Layout style={{ width: '100%', height: '100%' }}>
          <HeaderStyled>
            <Flex justify="space-between" wid="100%">
              <Flex className="flexleft">
                <BoxIcon onClick={onHide}>
                  <Menuicon />
                </BoxIcon>
                <ImgIcon src={logoicon} />
              </Flex>
              {/* <BoxIcon> */}
              {/*  <Personalicon /> */}
              {/* </BoxIcon> */}
              <Box>
                <PopoverStyled
                  placement="bottomRight"
                  title={Title}
                  content={Content}
                  trigger="click"
                >
                  <BoxIcon>
                    <Personalicon />
                  </BoxIcon>
                </PopoverStyled>
              </Box>
            </Flex>
          </HeaderStyled>
          <Layout>
            <SiderStyled
              trigger={null}
              collapsible
              collapsed={collapsed}
              collapsedWidth={70}
              width={240}
            >
              <MenuItem
                theme="light"
                mode="inline"
                items={items}
                defaultOpenKeys="grp1"
                defaultSelectedKeys="grp1"
                onClick={handleMenuClick}
              />
            </SiderStyled>
            <Component />
          </Layout>
        </Layout>
      )}
    />
  );
};
ContainerLogin.propTypes = {
  component: PropTypes.object,
};
export default function App() {
  return (
    <ThemeProvider theme={normalTheme}>
      <>
        <Switch>
          <ContainerNotLogin exact path="/" component={Login} />
          <ContainerNotLogin exact path="/login" component={Login} />
          <ContainerLogin exact path="/account-management" component={Home} />
          <ContainerLogin
            exact
            path="/product-management"
            component={Product}
          />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
