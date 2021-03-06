import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import './css/styles.css';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes/>
      </div>
    </Provider>
  );
}

export default App;
