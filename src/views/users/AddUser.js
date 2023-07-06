import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';
import { GENDER_OPTIONS } from './../../utils/constants';
import UploadDocument from './../../components/UploadDocument/UploadDocument';

const options = [
  { value: 'role_1', label: 'Role_1' },
  { value: 'role_2', label: 'Role 2' },
  { value: 'role_3', label: 'Role 3' }
];

const AddUser = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: 'first name',
          lastName: 'last name',
          email: 'demo@gmail.com',
          role: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          //handle api call here
          console.log('handle api call here');
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <>
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formUserFirstName" className="text-left">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      className="form-control"
                      error={touched.firstName && errors.firstName}
                      name="firstName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                    />
                    {touched.firstName && errors.firstName && <Form.Text className="text-danger form-text">{errors.firstName}</Form.Text>}
                  </Form.Group>
                </Col>
                {/*<Col md={4}>

              <Form.Group controlId="formUserMiddleName" className="text-left">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter middle name"
                  className="form-control"
                  error={touched.middleName && errors.middleName}
                  name="middleName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.middleName}
                />
                {touched.middleName && errors.middleName && <Form.Text className="text-danger form-text">{errors.middleName}</Form.Text>}
              </Form.Group>
        </Col>*/}
                <Col md={6}>
                  <Form.Group controlId="formUserLastName" className="text-left">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      className="form-control"
                      error={touched.lastName && errors.lastName}
                      name="lastName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                    />
                    {touched.lastName && errors.lastName && <Form.Text className="text-danger form-text">{errors.lastName}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formUserMobile" className="text-left">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter mobile number"
                      className="form-control"
                      error={touched.mobile && errors.mobile}
                      name="mobile"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.mobile}
                    />
                    {touched.mobile && errors.mobile && <Form.Text className="text-danger form-text">{errors.mobile}</Form.Text>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formUserEmail" className="text-left">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email address"
                      className="form-control"
                      error={touched.email && errors.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    />
                    {touched.email && errors.email && <Form.Text className="text-danger form-text">{errors.email}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formUserGender" className="text-left">
                    <Form.Label>Gender</Form.Label>
                    <Select className="custom-select" options={GENDER_OPTIONS} />
                    {touched.email && errors.email && <Form.Text className="text-danger form-text">{errors.email}</Form.Text>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formUserEducation" className="text-left">
                    <Form.Label>Education</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter education"
                      className="form-control"
                      error={touched.education && errors.education}
                      name="education"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.education}
                    />
                    {touched.education && errors.education && <Form.Text className="text-danger form-text">{errors.education}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formUserRole" className="text-left">
                    <Form.Label>Role</Form.Label>
                    <Select className="custom-select" options={options} />
                    {touched.email && errors.email && <Form.Text className="text-danger form-text">{errors.email}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <h5 className="mt-1 text-muted">Upload Documents</h5>
              <Row>
                <Col md={4}>
                  <UploadDocument />
                </Col>
                <Col md={4}>
                  <UploadDocument />
                </Col>
                <Col md={4}>
                  <UploadDocument />
                </Col>
              </Row>

              {errors.submit && (
                <Col sm={12}>
                  <Alert variant="danger">{errors.submit}</Alert>
                </Col>
              )}
              <Row>
                <Col className="mt-3" mt={2}>
                  <Button className="btn-block" color="primary" disabled={isSubmitting} type="submit" variant="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default AddUser;
