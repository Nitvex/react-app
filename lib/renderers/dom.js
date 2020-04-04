import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import dataApi from '../dataApi';

const store = new dataApi(window.initialData);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));