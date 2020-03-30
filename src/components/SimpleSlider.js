import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import javaScript from '../assets/images/javascript.png';
import jquery from "../assets/images/jquery.gif";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import react from "../assets/images/react.png";
import mongodb from "../assets/images/mongodb.png";
import git from "../assets/images/git.png";
import firebase from "../assets/images/firebase.png";
import mysql from "../assets/images/mysql.png";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 400
    }
    return <Container>
        <Slider {...settings}>
          <div style={styles.sliderStyle}>
            <img style={styles.imageStyle} src={javaScript} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.imageStyle} src={jquery} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.imageStyle} src={node} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.expressStyle} src={express} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.imageStyle} src={react} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.gitStyle} src={git} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.MySQLStyle} src={mysql} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.wideImgStyle} src={firebase} />
          </div>
          <div style={styles.sliderStyle}>
            <img style={styles.imageStyle} src={mongodb} />
          </div>
        </Slider>
      </Container>;
  }
}

const styles={
  sliderStyle: {
    display: 'flex',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 120,
    width: 120
  },
  wideImgStyle: {
    height: 100,
    width: 320,
    paddingTop: 15
  },
  expressStyle: {
    height: 100,
    width: 250,
    paddingTop: 25
  },
  gitStyle: {
    height: 100,
    width: 230,
    paddingTop: 10
  },
  MySQLStyle: {
    height: 100,
    width: 190
  }
}

export default SimpleSlider;