import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoPlayer from './VideoPlayer';
import Parent from './Parent';
import Home from './Styles/Home';
import * as serviceWorker from './serviceWorker';
import { GuineaPigs } from './GuineaPigs/components/GuineaPigs';
import { MousePos } from './MousePos';

ReactDOM.render(
  <React.StrictMode>
    <MousePos/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
