import React from 'react'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {useHistory} from 'react-router-dom'
import Input from './UI/Input'
import BMI from './../states/BMI'
import formState from './../states/formState'
import formErrors from './../states/formErrors'

const Firstpage = () => {

    const form = useRecoilValue(formState)
    const setForm = useSetRecoilState(formState)
    const errors = useRecoilValue(formErrors)
    const setErrors = useSetRecoilState(formErrors)
    const BMIvalue = useRecoilValue(BMI)
    const history = useHistory()

    const setField = (field, value) => {
        setForm({...form, [field]: value})
        if (errors[field]) {
            setErrors({...errors,[field]: null})
        }
    }
    
    const checkErrors = () => {
        const newErrors = {
            name: form.name == ''?"لطفا نام خود را وارد کنید":null,
            lastName: form.lastName == ''?'لطفا نام خانوادگی خود را وارد کنید':null,
            phoneNumber: form.phoneNumber == ''?'لطفا شماره تلفن خود را وارد کنید':null,
            email: form.email == ''?'لطفا ایمیل خود را وارد کنید':null,
            height: form.height == 0?'لطفا قد خود را وارد کنید':null,
            weight: form.weight == 0?'لطفا وزن خود را وارد کنید':null,
            age: form.age > 45?'بیمه عمر برای افراد زیر 45 سال تعریف می‌شود':(form.age == 0?'لطفا سن خود را انتخاب کنید':null),
            branch: form.branch == 'شعبه' ? 'لطفا شعبه را انتخاب کنید': null
        }
        setErrors(newErrors)
        Object.values(newErrors).every(value => value == null) && history.push("/second")
    }

    const onSubmit = (e) => {
        e.preventDefault()
        checkErrors()
    }

    return (
        <Container fluid="xl" style={containerStyle} dir="rtl">
            <Form>
                <Row>
                    <Col>
                        <Input text="نام" field="lastName" 
                        error={errors.lastName} setField={setField}/>
                    </Col>
                    <Col>
                        <Input text="نام خانوادگی" field="name" type="name"
                        error={errors.name} setField={setField}/>
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
                        <Input type="number" text="سن" field="age"
                        error={errors.age} setField={setField}/>
                    </Col>
                    <Col>
                        <Input type="number" text="قد (cm)" field="height"
                        error={errors.height} setField={setField}/>
                    </Col>
                    <Col>
                        <Input type="number" text="وزن (kg)" field="weight"
                        error={errors.weight} setField={setField}/>
                    </Col>
                </Row>
                <Row>
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
                    <Col style={{textAlign:'left'}}>
                        <Form.Group className="mb-3" style={{fontFamily:'sans-serif'}}>
                        <Form.Label>BMI: {Math.round(BMIvalue * 100) / 100}</Form.Label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col />
                    <Col xl={10}>
                        <ProgressBar striped variant="success" now={50}/>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <p style={{textAlign:'center'}}>مرحله 1 از 2 طی شده</p>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '50px'
}

export default Firstpage
