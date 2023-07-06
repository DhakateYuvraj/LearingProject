import React from 'react';
import { Form } from 'react-bootstrap';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import './datepicker.scss';
import moment from 'moment';

export const NewDateRangePicker = (props) => {
  const { title = 'Date', singleDatePicker = true } = props;

  return (
    <Form.Group controlId="datepicker">
      <Form.Label>{title}</Form.Label>
      <DateRangePicker
        initialSettings={{
          singleDatePicker,
          startDate: moment(),
          showDropdowns: true
        }}
      >
        <Form.Control type="text" placeholder="Select Date" />
      </DateRangePicker>
    </Form.Group>
  );
};
