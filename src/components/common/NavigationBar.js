import React, { Component } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

var smoothScroll = {
  timer: null,

  stop: function() {
    clearTimeout(this.timer);
  },

  scrollTo: function(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function(x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };
    var percentage;
    var startTime;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

    startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleHomeClick() {
    smoothScroll.scrollTo("landing");
  };

  handleContactClick() {
    smoothScroll.scrollTo("contact");
  };

  handleAboutMeClick() {
    smoothScroll.scrollTo("aboutMe");
  };

  handleSkillsClick() {
    smoothScroll.scrollTo("skills");
  };

  handleProjectsClick() {
    smoothScroll.scrollTo("projects");
  };

  handlePhotographyClick() {
    smoothScroll.scrollTo("photography");
  }

  render() {
    return (
      <div>
        <div className="navigation-wrap bg-light start-header start-style">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <a className="navbar-brand" href="google.com" target="_blank"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/logo.svg" alt="" /></a>	
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                        <a className="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#aboutme" onClick={this.handleAboutMeClick}>About Me</a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#" onClick={this.handleAboutMeClick}>Skills</a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#" onClick={this.handleAboutMeClick}>Experience</a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#" onClick={this.handleAboutMeClick}>Contact</a>
                      </li>
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <a className="nav-link" href="#" onClick={this.handleAboutMeClick}>Resume</a>
                      </li>
                    </ul>
                  </div>
                </nav>		
              </div>
            </div>
          </div>
        </div>
        {/* Link to page
================================================== */}
        <a href="google.com" className="link-to-portfolio" target="”_blank”" />
      </div>
    );
  }
}

export default NavigationBar;
