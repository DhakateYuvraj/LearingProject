import React from 'react';
import { Row, Col, Button, Alert, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useAuth from '../../../hooks/useAuth';
import useScriptRef from '../../../hooks/useScriptRef';

const FirebaseLogin = ({ className, ...rest }) => {
  const scriptedRef = useScriptRef();

  const { firebaseEmailPasswordSignIn } = useAuth();

  return (
    <>
      <Formik
        initialValues={{
          email: 'demo@gmail.com---',
          password: '123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await firebaseEmailPasswordSignIn(values.email, values.password);

            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(true);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <>
            <Form noValidate onSubmit={handleSubmit} className={className} {...rest}>
              <Form.Group controlId="formSigninEmail" className="text-left">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="form-control"
                  error={touched.email && errors.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email && <Form.Text className="text-danger form-text">{errors.email}</Form.Text>}
              </Form.Group>

              <Form.Group controlId="formSigninPassword" className="text-left">
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
                {touched.password && errors.password && <Form.Text className="text-danger form-text">{errors.password}</Form.Text>}
              </Form.Group>

              {errors.submit && (
                <Col sm={12}>
                  <Alert variant="danger">{errors.submit}</Alert>
                </Col>
              )}

              <Row>
                <Col mt={2}>
                  <Button className="btn-block" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                    Signin
                  </Button>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Formik>

      <hr />
    </>
  );
};

export default FirebaseLogin;
