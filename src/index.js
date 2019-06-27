import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Survey from './components/survey/survey';
import * as serviceWorker from './serviceWorker';
import './questions.json';

ReactDOM.render(<Survey />, document.getElementById('root'));
serviceWorker.unregister();
