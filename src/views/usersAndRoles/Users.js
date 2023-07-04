import React from 'react';
import { Button } from 'react-bootstrap';
import Table from './../../components/Table';

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
  return (
    <>
      <div className="d-flex justify-content-sm-end">
        <Button variant="primary m-0 mb-2" size="sm">
          <span className="feather icon-plus" /> User
        </Button>
      </div>
      <Table tableData={usersData} tableHeaders={columns} />
    </>
  );
};

export default Users;
