import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

const AddClassRoom = () => {
  return (
    <>
      <Formik
        initialValues={{
          className: '',
          standard: '',
          division: '',
          description: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          className: Yup.string().max(255).required('Class Name is required')
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
                <Col md={12}>
                  <Form.Group controlId="formClassName" className="text-left">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter class name"
                      className="form-control"
                      error={touched.className && errors.className}
                      name="className"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.className}
                    />
                    {touched.className && errors.className && <Form.Text className="text-danger form-text">{errors.className}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formClassStandard" className="text-left">
                    <Form.Label>Standard</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter standard"
                      className="form-control"
                      error={touched.standard && errors.standard}
                      name="standard"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.standard}
                    />
                    {touched.standard && errors.standard && <Form.Text className="text-danger form-text">{errors.standard}</Form.Text>}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formClassDivision" className="text-left">
                    <Form.Label>Division</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter division"
                      className="form-control"
                      error={touched.division && errors.division}
                      name="className"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.division}
                    />
                    {touched.division && errors.division && <Form.Text className="text-danger form-text">{errors.division}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group controlId="formClassDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Description" />
                  </Form.Group>
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

export default AddClassRoom;
