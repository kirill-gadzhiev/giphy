import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import {searchStore} from './store/search/search.reducer';

ReactDOM.render(
  <React.StrictMode>
	  	<Provider store={searchStore}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
