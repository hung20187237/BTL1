/**
 * ...
 */

import { Button, Checkbox, Input } from 'antd';
import styled from 'styled-components';

const Inputpw = Input.Password;

const Container = styled.div`
  background: ${props => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: radial-gradient(circle at top right, rgb(255, 199, 116), #ff835a);
`;

const Wrapper = styled.section`
  background: white;
  height: 55vh;
  position: relative;
  max-width: 400px;
  width: 94%;
  margin: 20vh auto;
  padding: 0 32px;
  border-radius: 15px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
`;

export const box = styled.div`
  width: ${props => props.width};
  heght: ${props => props.height};
  color: ${props => props.color};
  background: ${props => props.background};
  border: ${props => props.border};

  :hover {
    color: ${props => props.hoverColor};
    background: ${props => props.hoverBackground};
    border: ${props => props.hoverBorder};
  }

  :focus {
    color: ${props => props.focusColor};
    background: ${props => props.focusBackground};
    border: ${props => props.focusBorder};
  }
`;

export const Text = styled.span`
  font-weight: ${props => props.fw};
  font-size: ${props => props.fs};
  color: ${props => props.color};
  padding: ${props => props.pad};
  &.titlecenter {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  &.buttontext {
    display: inline-block;
  }
`;

export const InputStyled = styled(Input)`
  &.ant-input {
    padding: 7.9px 11px;
    color: #545454;
    line-height: 1.3;
    border-radius: 6px;
  }
  &.margin {
    margin-bottom: 24px;
  }
`;

export const InputPassword = styled(Inputpw)`
  &.ant-input-affix-wrapper {
    padding: 7.9px 11px;
    color: #545454;
    line-height: 1.3;
    border-radius: 6px;
  }
  &.margin {
    margin-bottom: 24px;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  align-items: center;
  margin-bottom: ${props => props.mgb};
  justify-content: ${props => props.justify};
`;

export const Checkboxstyled = styled(Checkbox)`
  &.ant-checkbox-wrapper {
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &.marginright {
    margin-right: 10px;
  }
`;

export const Link = styled.span`
  color: #038fde;
  cursor: pointer;
  font-weight: 500;
`;

export const ButtonStyled = styled(Button)`
  &.ant-btn {
    margin-bottom: 0;
    height: 36px;
    display: block;
    width: 100%;
    line-height: 34px;
    background: #ff4d4f;
    background-color: #ff4d4f !important;
    border-color: #ff4d4f !important;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    color: #ffffff !important;
    border: solid 1px #d9d9d9;
    padding: 0 15px;
    outline: 0;
    border-radius: 6px;
  }
  &.margin {
    margin-bottom: 24px;
  }
`;

export { Container, Wrapper };
