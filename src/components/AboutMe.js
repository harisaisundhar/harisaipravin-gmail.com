import React, { Component } from 'react';
import { Container, Media } from 'reactstrap';
import donovan from '../assets/images/dlow.jpeg';

class AboutMe extends Component {
    render() {
        return <Container className="section" id="aboutMe">
            <Media>
              <Media left href="#">
                <img src={donovan} alt="donovan" />
              </Media>
              <Container>
                <Media body>
                  <Media heading>Harisai</Media>
                 helo
                </Media>
              </Container>
            </Media>
          </Container>;
    }
}

export default AboutMe;
