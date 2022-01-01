import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Input from './UI/Input'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import formState from './../states/formState'
import formErrors from './../states/formErrors'
import BMI from './../states/BMI'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Firstpage = () => {

    const form = useRecoilValue(formState)
    const setForm = useSetRecoilState(formState)
    const errors = useRecoilValue(formErrors)
    const setErrors = useSetRecoilState(formErrors)
    const BMIvalue = useRecoilValue(BMI)

    const setField = (field, value) => {
        setForm({
          ...form,
          [field]: value
        })
        if (errors[field]) {
            setErrors({
                ...errors,
                [field]: null
            })
        }
    }
    
    const checkErrors = () => {
        setErrors({
            name: form.name == ''?"لطفا نام خود را وارد کنید":null,
            lastName: form.lastName == ''?'لطفا نام خانوادگی خود را وارد کنید':null,
            phoneNumber: form.phoneNumber == ''?'لطفا شماره تلفن خود را وارد کنید':null,
            email: form.email == ''?'لطفا ایمیل خود را وارد کنید':null,
            height: form.height == 0?'لطفا قد خود را وارد کنید':null,
            weight: form.weight == 0?'لطفا وزن خود را وارد کنید':null,
            age: form.age > 45?'بیمه عمر برای افراد زیر 45 سال تعریف می‌شود':(form.age == 0?'لطفا سن خود را انتخاب کنید':null),
            branch: form.branch == 'شعبه' ? 'لطفا شعبه را انتخاب کنید': null
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkErrors()
    }

    return (
        <Container fluid="xl" style={containerStyle}>
            <Form>
                <Row>
                    <Col>
                        <Input text="نام خانوادگی" field="name" type="name"
                        error={errors.name} setField={setField}/>
                    </Col>
                    <Col>
                        <Input text="نام" field="lastName" 
                        error={errors.lastName} setField={setField}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input text="تلفن همراه" field="phoneNumber" 
                        error={errors.phoneNumber} setField={setField}/>
                    </Col>
                    <Col>
                        <Input text="ایمیل" field="email" 
                        error={errors.email} setField={setField}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="number" text="قد(متر)" field="height"
                        error={errors.height} setField={setField}/>
                    </Col>
                    <Col>
                        <Input type="number" text="وزن(کیلوگرم)" field="weight"
                        error={errors.weight} setField={setField}/>
                    </Col>
                    <Col>
                        <Input type="number" text="سن" field="age"
                        error={errors.age} setField={setField}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" style={{fontFamily:'sans-serif'}}>
                        <Form.Label>BMI: {Math.round(BMIvalue * 100) / 100}</Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group style={{textAlign:'right'}}>
                            <Form.Select style={{textAlign:'right'}} onChange={(e)=>setField('branch',e.target.value)}
                            isInvalid={errors.branch}>
                                <option>شعبه</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Select>
                            <Form.Text className="text-muted">{errors.branch}</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                <ProgressBar striped variant="success" now={50}/>
                </Row>
                <br/>
                <Row>
                    <Col sx={1}>
                    <Button variant="primary" type="submit" onClick={onSubmit}>صفحه بعد</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '50px'
}

export default Firstpage
