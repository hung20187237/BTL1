import { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';
import { Layout, Menu, Modal, Popover } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Table from '../../res/components/Table';

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
`;
export const ImgIcon = styled.img`
  height: 40px;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
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
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItem = styled(Menu)`
  &.ant-menu {
    padding: 12px;
  }
  .ant-menu-item {
    padding-left: 12px !important;
    height: 36px;
    border-radius: 5px;
    :hover {
      background-color: rgb(207, 216, 220);
    }
  }
  .ant-menu-title-content {
    padding-left: 16px;
  }
  &.ant-menu-inline {
    border-right: unset;
  }
`;

export const ContentStyled = styled(Content)`
  &.ant-layout-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    padding: 24px;
    //max-width: calc(100% - 230px - 1px);
    overflow-y: hidden;
  }
  &.reponsive {
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
`;

export const Box = styled.div`
  &.modalbox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &.modalforminput {
    flex: 1;
    order: 1;
  }
  &.modalboxinput {
    margin-bottom: 10px;
  }
`;

export const PopoverStyled = styled(Popover)`
  .ant-popover-title {
    padding: 15px 16px 4px;
  }
  &.ant-popover-inner-content {
    padding: 20px 16px;
  }
`;
