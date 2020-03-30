import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/ind.css';
import './assets/css/index.css';
import './assets/css/swap.css';
import './assets/css/exp.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
