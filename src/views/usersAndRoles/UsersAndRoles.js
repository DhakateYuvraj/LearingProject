import React from 'react';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import Users from './Users';
import Roles from './Roles';

const UsersAndRoles = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <Tabs defaultActiveKey="users" id="uncontrolled-tab-example">
            <Tab eventKey="users" title="Users">
              <Users />
            </Tab>
            <Tab eventKey="roles" title="Roles">
              <Roles />
            </Tab>
            {/*
              <Tab eventKey="newUsers" title="Pending Users">
                {tabContent}
              </Tab>
            */}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default UsersAndRoles;
