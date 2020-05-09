import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/Store'
import Navigation from './routes/Navigation'

export default function App() {
  return (
    <Provider store={store}>
        <Navigation />
    </Provider>
  );
}
