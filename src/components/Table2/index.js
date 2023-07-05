import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';

const selectRow = {
  mode: 'checkbox',
  clickToSelect: true
};

const Table = (props) => {
  const {
    tableData = [],
    tableHeaders = [],
    keyField = 'id',
    isRemote = false,
    onTableChangeFun,
    paginationEnable,
    onPageChangeFun,
    onSizePerPageChangeFun,
    activePage,
    sizePerPage,
    callback,
    noDataText = 'No Data Found'
    //optionsData,
  } = props;

  return (
    <BootstrapTable
      keyField={keyField}
      data={tableData}
      columns={tableHeaders}
      pagination={paginationFactory()}
      filter={filterFactory()}
      selectRow={selectRow}
      remote={isRemote}
      onTableChange={onTableChangeFun}
      noDataIndication={() => noDataText}
    />
  );
};

export default Table;
