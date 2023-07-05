import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

const AddUser = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: 'first name',
          lastName: 'last name',
          email: 'demo@gmail.com---',
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

              <Form.Group controlId="formUserRole" className="text-left">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" className="mb-3">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
                {touched.email && errors.email && <Form.Text className="text-danger form-text">{errors.email}</Form.Text>}
              </Form.Group>

              {errors.submit && (
                <Col sm={12}>
                  <Alert variant="danger">{errors.submit}</Alert>
                </Col>
              )}
              <Row>
                <Col mt={2}>
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
