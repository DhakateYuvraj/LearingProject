import React from 'react';
import cellEditFactory from 'react-bootstrap-table2-editor';
import PropTypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import filterFactory from 'react-bootstrap-table2-filter';

import './table.scss';

const Table = (props) => {
  const {
    id,
    keyField,
    tableId,
    showColumnPreferences,
    handleTableHeaderUpdate,
    isRemote,
    tableData,
    tableHeader = [],
    optionsData,
    paginationEnable,
    editCeil,
    totalSize,
    onPageChangeFun,
    activePage,
    sizePerPage,
    callback,
    noDataText = 'No Data Found',
    ...other
  } = props;

  const customTotal = (from, to, size) => <span className="react-bootstrap-table-pagination-total pr-2">Showing</span>;

  const options = {
    ...optionsData,
    paginationTotalRenderer: customTotal,
    totalSize: totalSize ? totalSize : tableData.length,
    page: activePage,
    sizePerPage: sizePerPage,
    disablePageTitle: true
  };

  return (
    <>
      <ToolkitProvider keyField={keyField} data={[...tableData]} columns={tableHeader} search>
        {(props) => {
          const tableProps = { ...props.baseProps, ...other };
          if (paginationEnable) {
            tableProps.pagination = paginationFactory(options);
          }
          if (editCeil) {
            tableProps.cellEdit = cellEditFactory({ mode: 'click', blurToSave: true });
          }
          return (
            <>
              <BootstrapTable
                remote={isRemote}
                {...tableProps}
                filter={filterFactory()}
                onTableChange={onPageChangeFun}
                noDataIndication={noDataText}
              />
            </>
          );
        }}
      </ToolkitProvider>
    </>
  );
};

Table.propTypes = {
  keyField: PropTypes.any,
  activePage: PropTypes.any,
  optionsData: PropTypes.any,
  tableData: PropTypes.array,
  tableHeader: PropTypes.array,
  isRemote: PropTypes.bool,
  sizePerPage: PropTypes.any,
  editCeil: PropTypes.bool
};

Table.defaultProps = {
  activePage: 1,
  keyField: 'name',
  optionsData: {
    paginationSize: 5,
    pageStartIndex: 1,
    showTotal: true
  },
  paginationEnable: true,
  editCeil: false,
  tableHeader: [
    {
      dataField: 'id',
      text: 'ID'
    },
    {
      dataField: 'name',
      text: 'Name'
    },
    {
      dataField: 'email',
      text: 'Email'
    }
  ],
  tableData: [],
  noDataIndication: 'No Data Found',
  isRemote: false,
  sizePerPage: 10
};

export default Table;
