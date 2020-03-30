import React from 'react';
import Center from 'react-center';
import jQuery from 'jquery'
import dp from '../assets/images/dpf.jpg';

jQuery(".hover").mouseleave(function($){
  $(this).removeClass("hover");
  
});


class Photography extends React.Component {
    render() {
        return (
         
          <Center>
          <figure className="snip1543">
            <img src={dp} alt="sample108"/>
            <figcaption>
            <p>.</p>
              <h3>.   Harisai Sundhar .</h3>
              <p></p>
            </figcaption>
            <a href="google.com" />
          </figure>
        </Center>
        );
    }
}

export default Photography;
