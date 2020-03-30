import React, { Component } from 'react';
import { Container } from 'reactstrap';



class Landing extends Component {
    render() {
        return (
            <div className="text-center d-flex justify-content-center" id='landing'>
              <Container>
                <h1 className="page-title" id="landing-title">
                  <strong>Harisai Sundhar</strong>
                </h1>
                <p className="page-title" id="landing-title">
                  <strong>Full-Stack Web Developer</strong>
                </p>
              </Container>
            </div>
        );
    }
}

export default Landing; 
