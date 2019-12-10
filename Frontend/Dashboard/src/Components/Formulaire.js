import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Row, Col, Form} from "react-bootstrap";


class Formulaire extends Component{
    constructor(props)
    {
        super(props);
        this.state = {

        }
    }
}

<Card className="card-form">
    <Row className="my-5 justify-content-center">
        <Col className={"col-8"}>
            <Form onSubmit={this.handleSubmit}>
                {displayChamps}
                <br/>
                <div>
                    <Button type={"submit"} className="btn btn-primary">ENVOYER</Button></div>
            </Form>
        </Col>
    </Row>
</Card>