import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from 'containers';
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
import styles from './sharedStyles/styles.css'

ReactDOM.render(
  <Root />,
  document.getElementById('root'));
registerServiceWorker();
