import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
        <Container className='section' id='contact'>
            <h1>Contact</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Fizz Buzz" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder='fizz@buzz.com' />
                </FormGroup>
                <FormGroup>
                    <Label for="Message">Message</Label>
                    <Input type="textarea" name="text" id="text" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <section className="resume">
            <div className="content">
              <a href="#" target="_blank">
                <div className="btn-resume">
                  <i className="fa fa-download fa-2x" aria-hidden="true" />
                  <span>Download my resume<span>
                    </span></span></div>
              </a>
            </div>
          </section>
        </Container>
        
    );
  }
}

export default Contact;
