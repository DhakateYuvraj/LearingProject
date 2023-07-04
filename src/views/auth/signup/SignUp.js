import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
