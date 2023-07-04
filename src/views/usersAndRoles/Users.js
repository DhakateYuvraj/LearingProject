import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';

const Users = () => {
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

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };

  return (
    <>
      <div className="d-flex justify-content-sm-end">
        <Button variant="outline-primary m-0 mb-2" size="sm">
          <span className="feather icon-plus" /> User
        </Button>
      </div>
      <BootstrapTable keyField="id" data={usersData} columns={columns} pagination={paginationFactory()} selectRow={selectRow} />
    </>
  );
};

export default Users;
