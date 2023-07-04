import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const Roles = () => {
  const rolesData = [
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
      text: 'Role ID'
    },
    {
      dataField: 'name',
      text: 'Role Name',
      sort: true
    }
  ];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };

  return <BootstrapTable keyField="id" data={rolesData} columns={columns} pagination={paginationFactory()} selectRow={selectRow} />;
};

export default Roles;
