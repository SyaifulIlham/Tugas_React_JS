import Form from 'react-bootstrap/Form';

function FormField({ id, label, type = 'text', ...inputProps }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control id={id} type={type} {...inputProps} />
    </Form.Group>
  );
}

export default FormField;
