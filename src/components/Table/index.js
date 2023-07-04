import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

const Table = (props) => {
  const { tableData = [], tableHeaders = [], keyField = 'id', isRemote = false } = props;

  return (
    <BootstrapTable
      keyField={keyField}
      data={tableData}
      columns={tableHeaders}
      pagination={paginationFactory()}
      selectRow={selectRow}
      remote={isRemote}
    />
  );
};

export default Table;
