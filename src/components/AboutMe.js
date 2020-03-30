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
                  <Media heading>Donovan Lowkeen</Media>
                  My name is Donovan Lowkeen and I am an efficiency enthusiast and empathetic problem-solver. 
                  I have been working for the past 3.5 years in executive retail management but have always 
                  had a passion for innovating and solving problems. As an avid outdoorsman and high-altitude 
                  mountaineer and climber, I am in constant search of the next big challenge. With programming,
                  the challenges never end! 
                </Media>
              </Container>
            </Media>
          </Container>;
    }
}

export default AboutMe;
