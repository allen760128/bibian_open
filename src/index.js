import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import Header from './header';
import Sec1 from './sec1';
import Sec22 from './app';
import Sec3 from './sec3';
import Footer from './footer';

ReactDOM.render(<Header/>,document.getElementById('header'));
ReactDOM.render(<Sec1/>,document.getElementById('sec1'));
ReactDOM.render(<Sec22/>,document.getElementById('sec2'));
ReactDOM.render(<Sec3/>,document.getElementById('sec3'));
ReactDOM.render(<Footer/>,document.getElementById('footer'));