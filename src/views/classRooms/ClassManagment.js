import React from 'react';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import ClassTeachers from './ClassTeachers';
import ClassRooms from './ClassRooms';

const ClassManagment = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <Tabs defaultActiveKey="classTeachers" id="uncontrolled-tab-example">
            <Tab eventKey="classTeachers" title="Class Teachers">
              <ClassTeachers />
            </Tab>
            <Tab eventKey="classRooms" title="Class">
              <ClassRooms />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default ClassManagment;
