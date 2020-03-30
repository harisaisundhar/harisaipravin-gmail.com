import React from "react";
import { Container } from "reactstrap";
import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import telegram from '../assets/images/telegram.png';
import gmail from '../assets/images/gm.jpg';
class Footer extends React.Component {
  render() {
    return <Container id="footer-container" style={styles.footerStyle}>
        <a href="https://www.linkedin.com/in/harisaisundhar">
          <img className="logos" src={linkedin} alt="linked"/>
        </a>
        <a href="https://www.github.com/harisaisundhar">
          <img className="logos" src={github} alt="git"/>
        </a>
        <a href="https://www.facebook.com/harisai.pravin">
          <img className="logos" src={facebook} alt="logo"/>
        </a>
        <a href="https://www.instagram.com/mr.h_asap/">
          <img className="logos" src={instagram} alt="insta" />
        </a>
        <a href="https://t.me/Harisaisundhar">
          <img className="logos" src={telegram} alt="tele" />
        </a>
        <a href="https://t.me/Harisaisundhar">
          <img className="logos" src={gmail} alt="gmail" />
        </a>
      </Container>;
  }
}

const styles = {
  footerStyle: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 20,
    paddingBottom: 30
  },
  imageStyle: {
    padding: 3
  }
}



export default Footer;