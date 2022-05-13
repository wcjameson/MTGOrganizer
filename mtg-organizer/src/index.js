import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider  } from 'react-redux-firebase';
import { createFirestoreInstance  } from 'redux-firestore';
import firebase from "./firebase";
import 'firebase/compat/auth';

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

store.subscribe(() =>
 console.log(store.getState())
 );

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
