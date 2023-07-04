import React from 'react';
import { Card, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const SignUp = () => {
  return (
    <>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <Card className="borderless">
            <Row className="align-items-center">
              <Col>
                <Card.Body className="text-center">
                  <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon" />
                  </div>
                  <h3 className="mb-4">Sign up</h3>

                  {/*
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email address" />
                  </div>
                  <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <p className="mb-3 mx-n3">Sign-up requires admin verification for login access.</p>
                  <button className="btn btn-primary mb-4">Sign up</button>
                  */}

                  <Formik
                    initialValues={{
                      email: 'demo@gmail.com---',
                      password: '123456',
                      repassword: '123456',
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
                          <Form.Group controlId="formSignupEmail" className="text-left">
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

                          <Form.Group controlId="formSignupPassword" className="text-left">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Enter Password"
                              className="form-control"
                              error={touched.password && errors.password}
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.password}
                            />
                            {touched.password && errors.password && (
                              <Form.Text className="text-danger form-text">{errors.password}</Form.Text>
                            )}
                          </Form.Group>

                          <Form.Group controlId="formSignupRePassword" className="text-left">
                            <Form.Label>Re-enter Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Re-enter Password"
                              className="form-control"
                              error={touched.repassword && errors.repassword}
                              name="repassword"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.repassword}
                            />
                            {touched.password && errors.password && (
                              <Form.Text className="text-danger form-text">{errors.password}</Form.Text>
                            )}
                          </Form.Group>

                          {errors.submit && (
                            <Col sm={12}>
                              <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                          )}
                          <small className="mb-3 d-block">* Sign-up requires admin verification for login access.</small>
                          <Row>
                            <Col mt={2}>
                              <Button
                                className="btn-block"
                                color="primary"
                                disabled={isSubmitting}
                                size="large"
                                type="submit"
                                variant="primary"
                              >
                                Sign up
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </>
                    )}
                  </Formik>

                  <p className="mb-2">
                    Already have an account?{' '}
                    <NavLink to="/signin" className="f-w-400">
                      Login
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SignUp;
