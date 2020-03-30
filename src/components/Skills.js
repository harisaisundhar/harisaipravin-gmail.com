import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SimpleSlider from './SimpleSlider';

class Skills extends Component {
    render() {
        return (
            <Container className='section' id="skills">
                <h1>Skills</h1>
                <SimpleSlider />
            </Container>
        );
    };
};

export default Skills;