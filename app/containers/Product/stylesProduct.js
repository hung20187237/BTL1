import { Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import styled from 'styled-components';
import { Menu, Modal, Popover, Radio, Select } from 'antd';
import { Content } from 'antd/es/layout/layout';

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
    margin-bottom: 24px;
  }
`;

export const ModalStyled = styled(Modal)`
  .ant-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 16px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    pointer-events: auto;
    padding: 0;

    .ant-modal-header {
      padding: 16px 20px;
      color: #545454;
      background: #c5ced9;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 16px 16px 0 0;
    }

    .ant-modal-title {
      margin: auto;
      color: #535353;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      word-wrap: break-word;
      text-align: center;
    }

    .ant-modal-body {
      padding: 24px 12px;
      font-size: 14px;
      line-height: 1.3;
      word-wrap: break-word;
    }
    .ant-modal-footer {
      padding: 16px 16px;
      text-align: right;
      background: transparent;
      border-top: 1px solid #e8e8e8;
      display: flex;
      justify-content: center;
    }
    .ant-modal-close {
      display: none;
    }
  }
`;

export const SelectStyled = styled(Select)`
  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    height: 36px;
    border-radius: 6px;
    padding: 7.9px 11px;
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 20px;
  }
  &.ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 34px;
  }
  &.ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 20px;
  }
`;

export const RadioStyled = styled(Radio)`
  .ant-radio-checked .ant-radio-inner {
    border-color: #fa8b33;
  }
  .ant-radio-inner::after {
    background-color: #fa8b33;
  }
`;
