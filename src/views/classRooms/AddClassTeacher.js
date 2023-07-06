import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';

const classOptions = [{ value: 'PG_A', label: 'PG_A' }];

const yearOptions = [
  { value: '2022-23', label: '2022-23' },
  { value: '2023-24', label: '2023-24' }
];

const teacherOptions = [{ value: 'teacher_A', label: 'teacher_A' }];

const AddClassTeacher = () => {
  return (
    <>
      <Formik
        initialValues={{
          className: '',
          acedemicYear: null,
          teacher: '',
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
                  <Form.Group controlId="formTeacher-Class" className="text-left">
                    <Form.Label>Class Name</Form.Label>
                    <Select className="custom-select" options={classOptions} />
                    {touched.className && errors.className && <Form.Text className="text-danger form-text">{errors.className}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formTeacher-Year" className="text-left">
                    <Form.Label>Academic Year</Form.Label>
                    <Select className="custom-select" options={yearOptions} />
                    {touched.academicYear && errors.academicYear && (
                      <Form.Text className="text-danger form-text">{errors.academicYear}</Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formTeacher-TeacherName" className="text-left">
                    <Form.Label>Teacher</Form.Label>
                    <Select className="custom-select" options={teacherOptions} />
                    {touched.teacher && errors.teacher && <Form.Text className="text-danger form-text">{errors.teacher}</Form.Text>}
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

export default AddClassTeacher;
