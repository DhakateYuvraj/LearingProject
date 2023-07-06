import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

import Table from './../../components/Table';
import Drawer from './../../components/Drawer';
import Select from './../../components/Select';
import AddUser from './AddUser';

import './users.scss';

const options = [
  { value: 'role_1', label: 'Role_1' },
  { value: 'role_2', label: 'Role 2' },
  { value: 'role_3', label: 'Role 3' }
];

const usersData = [
  { id: '1', firstName: '1', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '2', firstName: '2', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '3', firstName: '3', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '4', firstName: '4', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '5', firstName: '5', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '6', firstName: '6', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '7', firstName: '7', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '8', firstName: '8', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '9', firstName: '9', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '10', firstName: '10', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '11', firstName: '11', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '12', firstName: '12', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '13', firstName: '13', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '14', firstName: '14', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '15', firstName: '15', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '16', firstName: '16', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '17', firstName: '17', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '18', firstName: '18', lastName: 'lastName', email: 'email@email.com', role: 'Role_1' },
  { id: '19', firstName: '19' }
];
const columns = [
  {
    dataField: 'id',
    text: 'User ID'
  },
  {
    dataField: 'firstName',
    text: 'First Name',
    sort: true
  },
  {
    dataField: 'lastName',
    text: 'Last Name',
    sort: true
  },
  {
    dataField: 'email',
    text: 'Email',
    sort: true
  },
  {
    dataField: 'role',
    text: 'Role',
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
    <Card className="">
      <Card.Body>
        {isEmpty(selectedRows) && (
          <div className="d-flex justify-content-between">
            <Form className="row w-100">
              <Form.Group controlId="searchText" className="text-left col-2 pr-0">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  name="search"
                  //onBlur={handleBlur}
                  onChange={(e) => {
                    console.log(e);
                  }}
                  //value={values.lastName}
                />
              </Form.Group>

              <Form.Group controlId="listUserRole" className="text-left col-2 pr-0 d-none d-lg-block">
                <Select
                  options={options}
                  onFilterChange={(a, b) => console.log(a, b)}
                  filterLabel="user-role"
                  defaultValueText={'Role search'}
                />
              </Form.Group>
              <Button
                variant="btn btn-large btn-primary m-0 ml-3 "
                style={{ maxHeight: '45px' }}
                size="large"
                onClick={() => console.log('apply filter')}
              >
                <span className="feather icon-filter" /> Apply
              </Button>
            </Form>
            <div className="d-flex justify-content-end" style={{ width: '150px' }}>
              <Button variant="primary m-0 mb-3 mt-2" size="large" onClick={() => setIsShow(true)}>
                <span className="feather icon-plus" /> User
              </Button>
            </div>
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
          wrapperClasses="users-table overflow-auto"
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
                label: 'Activate',
                action: () => {
                  console.log('Activate');
                }
              },
              {
                label: 'Deactivate',
                action: () => {
                  console.log('Deactivate');
                }
              },
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
      </Card.Body>
    </Card>
  );
};

export default Users;
