import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from './../../components/Table';
import Drawer from './../../components/Drawer';
import isEmpty from 'lodash/isEmpty';
import './usersAndRoles.scss';
import AddUser from './AddUser';

const usersData = [
  { id: '1', name: '1' },
  { id: '2', name: '2' },
  { id: '3', name: '3' },
  { id: '4', name: '4' },
  { id: '5', name: '5' },
  { id: '6', name: '6' },
  { id: '7', name: '7' },
  { id: '8', name: '8' },
  { id: '9', name: '9' },
  { id: '10', name: '10' },
  { id: '11', name: '11' },
  { id: '12', name: '12' },
  { id: '13', name: '13' },
  { id: '14', name: '14' },
  { id: '15', name: '15' },
  { id: '16', name: '16' },
  { id: '17', name: '17' },
  { id: '18', name: '18' },
  { id: '19', name: '19' }
];
const columns = [
  {
    dataField: 'id',
    text: 'User ID'
  },
  {
    dataField: 'name',
    text: 'User Name',
    sort: true
  }
];
const Users = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: false,
    selected: selectedRows?.map((item) => item.id),
    onSelect: (row, isSelect) => {
      isSelect
        ? setSelectedRows((i) => (isEmpty(i) ? [row] : [...i, row]))
        : setSelectedRows((i) => i.filter((item) => item.id !== row.id));
    },
    onSelectAll: (isSelect, rows) => {
      isSelect && setSelectedRows(rows);
      !isSelect && setSelectedRows([]);
    }
  };

  const handleTableChange = async (type, { page, sizePerPage }) => {
    setPageLimit(sizePerPage);
    setPageNumber(page);
  };

  return (
    <div className="">
      {isShow && (
        <Drawer
          show={isShow}
          title="Add User"
          subtitle="sub title"
          handleClickCross={() => {
            setIsShow(false);
          }}
          moreOption={[
            {
              label: 'Remove',
              action: () => {
                console.log('Remove');
              }
            }
          ]}
        >
          <AddUser />
        </Drawer>
      )}
      {isEmpty(selectedRows) && (
        <div className="d-flex justify-content-sm-end">
          <Button variant="primary m-0 mb-3 mt-2" size="large" onClick={() => setIsShow(true)}>
            <span className="feather icon-plus" /> User
          </Button>
        </div>
      )}
      {!isEmpty(selectedRows) && (
        <div className="option-bar w-100 d-flex justify-content-between px-2 alert-info">
          <div>
            <Button variant="outline-primary m-2 ml-0" size="sm" disabled={selectedRows.length > 1}>
              <span className="d-block feather icon-edit" /> Edit
            </Button>

            <Button variant="outline-primary m-2" size="sm">
              <span className="d-block feather icon-trash-2" /> Remove
            </Button>

            <Button variant="outline-primary m-2 ml-0" size="sm">
              <span className="d-block feather icon-user-check" /> Activate
            </Button>

            <Button variant="outline-primary m-2 ml-0" size="sm">
              <span className="d-block feather icon-user-x" /> Deactivate
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <span className="p-2">{selectedRows.length} selected</span>
            <span
              className="p-2 feather icon-x-circle"
              onClick={() => {
                setSelectedRows([]);
              }}
            />
          </div>
        </div>
      )}
      <Table
        keyField="id"
        tableData={usersData}
        tableHeader={columns}
        isRemote={false}
        totalSize={99}
        onPageChangeFun={handleTableChange}
        activePage={pageNumber}
        sizePerPage={pageLimit}
        wrapperClasses="users-table"
        rowClasses={(row) => {
          return `user-row-${row.id}`;
        }}
        defaultSorted={[
          {
            dataField: columns[0].dataField,
            order: 'asc'
          }
        ]}
        selectRow={selectRow}
      />
    </div>
  );
};

export default Users;
