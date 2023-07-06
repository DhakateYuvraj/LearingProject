import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Select from 'react-select';
import { NewDateRangePicker } from '../../components/Datepicker/Datepicker';

const studentOptions = [
  { value: 'student_1', label: 'student_1' },
  { value: 'student_2', label: 'student_2' },
  { value: 'student_3', label: 'student_3' }
];

const classOptions = [
  { value: 'PG_A', label: 'PG_A' },
  { value: 'PG_B', label: 'PG_B' }
];

const yearOptions = [
  { value: '2022-23', label: '2022-23' },
  { value: '2023-24', label: '2023-24' }
];

const StudentAdmission = () => {
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
                  <Form.Group controlId="formAdmission-student" className="text-left">
                    <Form.Label>Student</Form.Label>
                    <Select className="custom-select" options={studentOptions} />
                    {touched.student && errors.student && <Form.Text className="text-danger form-text">{errors.student}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formAdmission-Class" className="text-left">
                    <Form.Label>Class Name</Form.Label>
                    <Select className="custom-select" options={classOptions} />
                    {touched.className && errors.className && <Form.Text className="text-danger form-text">{errors.className}</Form.Text>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group controlId="formAdmission-Year" className="text-left">
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
                  <NewDateRangePicker title="Date Of Admission" singleDatePicker={true} />
                </Col>
              </Row>

              {errors.submit && (
                <Col sm={12}>
                  <Alert variant="danger">{errors.submit}</Alert>
                </Col>
              )}

              <div className="mt-3 d-flex justify-content-end">
                <Button varient="secondary" className="btn-secondary" onClick={() => console.log('Cancel')}>
                  Cancel
                </Button>
                <Button
                  varient="primary"
                  disabled={isSubmitting}
                  onClick={() => {
                    console.log('Submit');
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default StudentAdmission;
