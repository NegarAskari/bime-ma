import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

const Input = ({text, field, error, setField, type}) => {
    return (
        <Form.Group className="mb-3" style={style}>
            <Form.Label>{text}</Form.Label>
            <Form.Control placeholder={text} type={type}
            isInvalid={error} onChange={(e)=>setField(field, e.target.value)} dir={type=="number"?'ltr':'rtl'}/>
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
    field: PropTypes.string,
    error: PropTypes.string,
    setField: PropTypes.func,
    type: PropTypes.string,
}

export default Input
