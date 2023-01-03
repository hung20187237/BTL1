import React from 'react';
import { TableTest } from './styles';

const TableCustom = ({
  data,
  columns,
  isLoading,
  scroll,
  rowSelection,
  pagination,
}) => (
  <TableTest
    dataSource={data}
    columns={columns}
    loading={isLoading}
    pagination={pagination}
    scroll={scroll}
    rowSelection={rowSelection}
  />
);

export default TableCustom;
