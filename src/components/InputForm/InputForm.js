import React from 'react';
import { Button, Form } from 'react-bootstrap';

const InputForm = ({onSubmit, onChange, value}) => {

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group>
        <Form.Control 
          type='text' 
          placeholder='Input some text'
          onChange={onChange}
          value={value}
           />
        <Button type='submit'>Add</Button>
      </Form.Group>
    </Form>
  );
};

export default InputForm;