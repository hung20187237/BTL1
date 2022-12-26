import { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';

export const HeaderStyled = styled(Header)`
  &.ant-layout-header {
    box-shadow: 0 0 4px 4px rgb(0 0 0 / 8%);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    padding: 0 32px;
    height: 72px;
    z-index: 10;
    color: #262626;
    background: #fefefe;
    top: 0;
    width: 100%;
  }
`;

export const SiderStyled = styled(Sider)`
  &.ant-layout-sider {
    background-color: #ffffff;
    border-right: solid 1px #e8e8e8;
    position: relative;
    z-index: 9;
    display: flex;
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    flex: 0 1 230px !important;
    min-width: 230px !important;
`;
export const ImgIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const BoxIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background-color: rgba(0,0,0,0.1);
  }
`;
