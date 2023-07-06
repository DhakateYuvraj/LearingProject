import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty';

import Table from './../../components/Table';
import Select from './../../components/Select';
import Drawer from './../../components/Drawer';
import AddClassTearcher from './AddClassTeacher';

import './classRooms.scss';

const academicYearOptions = [
  { value: '2022-23', label: '2022-23' },
  { value: '2023-24', label: '2023-24' }
];

const classRoomsData = [
  { className: 'PG-A', classTeacher: 'Yuvi Dhakate', acedemicYear: '2023-24' },
  { className: 'PG-B', classTeacher: 'Yuvi Dhakate', acedemicYear: '2023-24' },
  { className: 'PG-A', classTeacher: 'Yuvi Dhakate', acedemicYear: '2022-23' }
];

const columns = [
  {
    dataField: 'className',
    text: 'Class Name',
    sort: true
  },
  {
    dataField: 'classTeacher',
    text: 'Class Teacher',
    sort: true
  },
  {
    dataField: 'acedemicYear',
    text: 'Acedemic Year',
    sort: true
  }
];

const ClassTeachers = () => {
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
    <div>
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
                options={academicYearOptions}
                onFilterChange={(a, b) => console.log(a, b)}
                filterLabel="academic-year"
                defaultValueText={'Year search'}
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
          <div className="d-flex justify-content-end" style={{ width: '200px' }}>
            <Button variant="primary m-0 mb-3 mt-2" size="large" onClick={() => setIsShow(true)}>
              <span className="feather icon-plus" /> Class Teacher
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
        tableData={classRoomsData}
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
          title="Add Class Teacher"
          subtitle="Assign a class teacher to the class for academic year."
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
          <AddClassTearcher />
        </Drawer>
      )}
    </div>
  );
};

export default ClassTeachers;
