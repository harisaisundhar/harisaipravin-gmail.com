import React from 'react';
import jQuery from 'jquery'

jQuery(document).ready(function($){
  var $aboutTitle = $('.about-myself .content h2');
  var $developmentWrapper = $('.development-wrapper');
  var developmentIsVisible = false;


/* ####### HERO SECTION ####### */

$('.hero .content .header').delay(500).animate({
  'opacity':'1',
  'top': '50%'
},1000);


$(window).scroll( function(){

  var bottom_of_window = $(window).scrollTop() + $(window).height();

  /* ##### ABOUT MYSELF SECTION #### */
  if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
    $('.about-myself .content h2').addClass('aboutTitleVisible');
  } 
/* ##### EXPERIENCE SECTION #### */

    // Check the location of each element hidden */
    $('.experience .content .hidden').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();

        /* If the object is completely visible in the window, fadeIn it */
        if( bottom_of_window > bottom_of_object ){

          $(this).animate({
            'opacity':'1',
            'margin-left': '0'
          },600);
        }
    });

/*###### SKILLS SECTION ######*/

  var middle_of_developmentWrapper = $developmentWrapper.offset().top + $developmentWrapper.outerHeight()/2;

  if((bottom_of_window > middle_of_developmentWrapper)&& (developmentIsVisible === false)){

    $('.skills-bar-container li').each( function(){

      var $barContainer = $(this).find('.bar-container');
      var dataPercent = parseInt($barContainer.data('percent'));
      var elem = $(this).find('.progressbar');
      var percent = $(this).find('.percent');
      var width = 0;

      var id = setInterval(frame, 15);

      function frame() {
        if (width >= dataPercent) {
            clearInterval(id);
        } else {
          width++;
          elem.css("width", width+"%");
          percent.html(width+" %");
        }
      }
    });
    developmentIsVisible = true;
  }
}); // -- End window scroll --
});

class About extends React.Component {
    render() {
        return (
          <div>
              
          <section className="about-myself">
            <div className="content">
              <h2>Hi !</h2>
              <p>I'm <span>Harisai Sundar</span></p><p>I'm a multidisciplinary designer that loves the intersection of art and code!</p>

<p>Don't you think the web should be fun again? Buttons and knobs and sounds and experimentation? We have an amazing medium here, to be able to express and do whatever we want. Let's do it!</p>

<p>I work as intern in VMware where i'm yet to be assigned to a project.</p>
            </div>
          </section>


          <h2>Skills</h2>
          <section className="skills">
            <div className="content">
              <div className="development-wrapper">
                <h2 className="development-title">Development</h2>
                <ul className="skills-bar-container">
                  <li>
                    <div className="progressbar-title">
                      <h3>C/C++</h3>
                      <span className="percent" id="html-pourcent" />
                    </div>
                    <div className="bar-container" data-percent={95}>
                      <span className="progressbar" id="progress-html" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h3>JAVA</h3>
                      <span className="percent" id="css-pourcent" />
                    </div>
                    <div className="bar-container" data-percent={85}>
                      <span className="progressbar" id="progress-css" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h3>Python</h3>
                      <span className="percent" id="javascript-pourcent" />
                    </div>
                    <div className="bar-container" data-percent={80}>
                      <span className="progressbar" id="progress-javascript" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h3>Javascript/ Jquery</h3>
                      <span className="percent" id="php-pourcent" />
                    </div>
                    <div className="bar-container" data-percent={65}>
                      <span className="progressbar" id="progress-php" />
                    </div>
                  </li>
                  <li>
                    <div className="progressbar-title">
                      <h3>HTML/CSS</h3>
                      <span className="percent" id="angular-pourcent" />
                    </div>
                    <div className="bar-container" data-percent={80}>
                      <span className="progressbar" id="progress-angular" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tools-knowledge-wrapper">
                <div className="tools-wrapper">
                  <h2 className="title">Tools</h2>
                  <ul className="tools">
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Photoshop
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Matlab
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Unity
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Android Stdios
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Adobe Premier pro
                    </li>
                  </ul>
                </div>
                <div className="knowledge-wrapper">
                  <h2 className="title">Knowledge</h2>
                  <ul className="knowledge">
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Data Structure & Algorithm
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Machine Learning
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Networks
                    </li>
                    <li>
                      <i className="fa fa-check" aria-hidden="true" />
                      Cloud Computing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="clear" />
          </section>
          <section className="experience">
            <div className="content">
              <h1>Experience</h1>
              <ul>
                <li>
                  <div className="experience-content hidden">
                    <h3>
                      <a className="nav-link" href="http://thebridge.psgtech.ac.in/">The Bridge</a>
                    </h3>
                    <div className="experience-time">Jun 2017-Mar 2019</div>
                    <h2>Apprenticeship</h2>
                    <p>Worked as web developer and helped in developing the website for the official online magazine of PSG College of Technology, using the CMS platform, Wordpress by providing modifications and new features.  </p>
                  </div>
                </li>
                <li>
                  <div className="experience-content hidden">
                    <h3>
                    <a className="nav-link" href="https://www.linkedin.com/in/d-edge-promotions-312423171/">D'Edge</a>
                    </h3>
                    <div className="experience-time">Apr - May 2019</div>
                    <h2>Summer Intership</h2>
                    <p>Contributed in developing an android application ​Plan-A-Wedding​, which brings all the component members of Wedding Planners to a common platform. By doing so, the workload of Wedding planners have been eased.</p>
                  </div>
                </li>
                <li>
                  <div className="experience-content hidden">
                    <h3>
                    <a className="nav-link" href="https://www.vmware.com/">VMWare</a>
                    </h3>
                    <div className="experience-time">May 2020 - Present</div>
                    <h2>Intership</h2>
                    <p>Waiting for the project to be allocated !</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        );
    }
}

export default About;