import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'containers/Root/Root';
import registerServiceWorker from './registerServiceWorker';
import styles from './sharedStyles/styles.css'

ReactDOM.render(
  <Root />,
  document.getElementById('root'));
registerServiceWorker();
