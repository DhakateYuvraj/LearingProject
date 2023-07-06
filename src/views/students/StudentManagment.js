import React from 'react';
import { Row, Col, Tab, Tabs } from 'react-bootstrap';
import Students from './Students';
import AllStudents from './AllStudents';

const StudentManagment = () => {
  return (
    <>
      <Row>
        <Col sm={12}>
          <Tabs defaultActiveKey="classTeachers" id="uncontrolled-tab-example">
            <Tab eventKey="classTeachers" title="Current Students">
              <Students />
            </Tab>
            <Tab eventKey="classRooms" title="All Students">
              <AllStudents />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default StudentManagment;
