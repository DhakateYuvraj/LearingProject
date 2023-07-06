import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table';
import Select from '../../components/Select';

import './students.scss';

const classOptions = [
  { value: 'PG-A', label: 'PG-A' },
  { value: 'PG-B', label: 'PG-B' }
];

const studentsData = [
  { id: '1', firstName: '1', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-A' },
  { id: '2', firstName: '2', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-A' },
  { id: '3', firstName: '3', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-A' },
  { id: '4', firstName: '4', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-A' },
  { id: '5', firstName: '5', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-A' },
  { id: '6', firstName: '6', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-B' },
  { id: '7', firstName: '7', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-B' },
  { id: '8', firstName: '8', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-B' },
  { id: '9', firstName: '9', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-B' },
  { id: '10', firstName: '10', lastName: 'lastName', mobile: '+91 98765 43210', gender: 'Male', class: 'PG-B' }
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
    dataField: 'mobile',
    text: 'Mobile',
    sort: true
  },
  {
    dataField: 'gender',
    text: 'Gender',
    sort: true
  },
  {
    dataField: 'class',
    text: 'Class',
    sort: true
  }
];
const AllStudents = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [selectedRows, setSelectedRows] = useState([]);
  const history = useHistory();

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
    <>
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

            <Form.Group controlId="listStudentClass" className="text-left col-2 pr-0 d-none d-lg-block">
              <Select
                options={classOptions}
                onFilterChange={(a, b) => console.log(a, b)}
                filterLabel="student-class"
                defaultValueText={'Class search'}
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
            <Button variant="primary m-0 mb-3 mt-2" size="large" onClick={() => history.push('/students/add')}>
              <span className="feather icon-plus" /> Student
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
        tableData={studentsData}
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
    </>
  );
};

export default AllStudents;
