import React from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'

const Input = ({text, field, error, setField, type}) => {
    return (
        <Form.Group className="mb-3" style={style}>
            <Form.Label>{text}</Form.Label>
            <Form.Control style={style} placeholder={text} type={type}
            isInvalid={error} onChange={(e)=>setField(field, e.target.value)}/>
            <Form.Text className="text-muted">{error}</Form.Text>
        </Form.Group>
    )
}

const style = {
    textAlign: 'right',
    fontFamily: 'Compset'
}

Input.propTypes = {
    text: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    error: PropTypes.string,
    setField: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default Input
