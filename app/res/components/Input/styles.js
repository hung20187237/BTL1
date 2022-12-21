import styled from 'styled-components';
import { Input } from 'antd';

export const InputCustom = styled(Input)`
  width: ${props => props.theme.inputStyle.width};
  color: ${props => props.theme.inputStyle.color};
  background: ${props => props.theme.inputStyle.background};
`;
