import React from 'react'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Input from './UI/Input'
import firstInputVisibility from './../states/firstInputVisibility'
import secondInputVisibility from './../states/secondInputVisibility'

const Secondpage = () => {

    const showFirst = useRecoilValue(firstInputVisibility)
    const showSecond = useRecoilValue(secondInputVisibility)
    const setShowFirst = useSetRecoilState(firstInputVisibility)
    const setShowSecond = useSetRecoilState(secondInputVisibility)
    
    return (
        <Container fluid="xl" style={containerStyle} dir="rtl">
            <Row>
                <Col xs={4}>
                    <Form.Check type="checkbox" label="آیا سیگار مصرف می‌کنید؟"
                    onChange={()=>setShowFirst(!showFirst)}/>
                </Col>
                <Col xs={1} />
                <Col>
                    {showFirst && <Input type="number" text="تعداد در روز"/>}
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <Form.Check type="checkbox" label="آیا قلیان مصرف می‌کنید؟"
                    onChange={()=>setShowSecond(!showSecond)}/>
                </Col>
                <Col xs={1} />
                <Col>
                    {showSecond && <Input type="number" text="تعداد در روز"/>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                    <Form.Label>بیماری‌ها:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>
                <Col />
            </Row>
            <Row>
                <Col />
                <Col xl={10}>
                <ProgressBar striped variant="success" now={100}/>
                </Col>
                <Col />
            </Row>
            <Row>
                <p style={{textAlign:'center'}}>مرحله 2 از 2 طی شده</p>
            </Row>
            <br/>
            <Row>
                <Col sx={1}>
                <Button variant="primary" type="submit">ثبت اطلاعات</Button>
                </Col>
            </Row>
        </Container>
    )
}

const containerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '50px'
}

export default Secondpage
