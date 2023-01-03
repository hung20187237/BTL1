import { Table } from 'antd';
import styled from 'styled-components';

export const TableTest = styled(Table)`
  width: 100%;
  border: 1px solid #c5ced9;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  .ant-table-container {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ant-table-header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ant-table-thead > tr > th {
    background: #c5ced9 !important;
    background-color: #c5ced9 !important;
  }
  .ant-table-body {
    overflow-x: hidden;
    border-bottom: 1px solid #c5ced9;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .ant-table {
    font-size: 1em;
    color: #000;
    font-weight: 400;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;
