import React from 'react';
import PropTypes from 'prop-types';
import { SelectCustom } from './styles';

const Select = props => (
  <SelectCustom {...props}>{props.children}</SelectCustom>
);
Select.propTypes = {
  children: PropTypes.element,
};

export default Select;
