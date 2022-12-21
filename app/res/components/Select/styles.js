import styled from 'styled-components';
import { Select } from 'antd';

export const SelectCustom = styled(Select)`
  width: ${props => props.theme.selectStyle.width};
`;
