import React, { useState } from 'react';
import { Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Select from 'react-select';

import { useHistory } from 'react-router-dom';

import { GENDER_OPTIONS } from '../../utils/constants';
import UploadProfilePic from '../../components/UploadProfilePic/UploadProfilePic';

import { NewDateRangePicker } from '../../components/Datepicker/Datepicker';
import StudentAdmission from './StudentAdmission';

const AddStudent = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Student Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={2}>
                  <UploadProfilePic />
                  <div className="mt-5">
                    <div className="mb-4">
                      <div className="mb-3">
                        <h6>Created On</h6>
                        <p>06 Jul 2023, 10:10AM</p>
                      </div>
                      <div className="mb-3">
                        <h6>Created By</h6>
                        <Link>Dhakate Yuvraj</Link>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="mb-3">
                        <h6>Updated On</h6>
                        <p>06 Jul 2023, 10:10AM</p>
                      </div>
                      <div className="mb-3">
                        <h6>Updated By</h6>
                        <Link>Dhakate Yuvraj</Link>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={10}>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.middleName">
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type="text" placeholder="Middle Name" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <NewDateRangePicker title="Date Of Birth" singleDatePicker={true} />
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.gender">
                        <Form.Label>Gender</Form.Label>
                        <Select className="custom-select" options={GENDER_OPTIONS} />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.mobileNum">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Address" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.perAddress">
                        <Form.Label>Permant Address</Form.Label>
                        <Form.Control as="textarea" rows="5" placeholder="Permant Address" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="City" />
                      </Form.Group>
                      <Form.Group controlId="addStudent.pin">
                        <Form.Label>Pin code</Form.Label>
                        <Form.Control type="text" placeholder="Pin code" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <h5 className="mt-4 text-muted">Family Background</h5>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.fatherName">
                        <Form.Label>Father Name</Form.Label>
                        <Form.Control type="text" placeholder="Father Name" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.fatherMobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.fatherEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="Email Id" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.motherName">
                        <Form.Label>Mother Name</Form.Label>
                        <Form.Control type="text" placeholder="Mother Name" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.motherMobile">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Number" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.motherEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="text" placeholder="Email Id" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.fatherOccupation">
                        <Form.Label>Father Occupation</Form.Label>
                        <Form.Control type="text" placeholder="Father Occupation" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.motherOccupation">
                        <Form.Label>Mother Occupation</Form.Label>
                        <Form.Control type="text" placeholder="Mother Occupation" />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.siblingCount">
                        <Form.Label>No. of Siblings</Form.Label>
                        <Form.Control type="text" placeholder="No. of Siblings" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <h5 className="mt-4 text-muted">Other Info</h5>
                  <Row>
                    <Col md={4}>
                      <Form.Group controlId="addStudent.otherDetails">
                        <Form.Label>Other Details</Form.Label>
                        <Form.Control type="text" placeholder="Other Details" />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="d-flex justify-content-end">
                <Button varient="secondary" className="btn-secondary" onClick={() => history.push('/students')}>
                  Cancel
                </Button>
                <Button
                  varient="primary"
                  onClick={() => {
                    handleShow();
                    console.log('Submit');
                  }}
                >
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentAdmission />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudent;
