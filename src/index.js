import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux"; 
import createSagaMiddleware from "redux-saga";
// import 'bootstrap/scss/bootstrap.scss';
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css'; 
import App from "./App";
import registerServiceWorker from "./registerServiceWorker"; 
import movieBookingReducer from "./store/reducers/movieBooking";
import orderReducer from "./store/reducers/order";
import authReducer from "./store/reducers/auth";
// import { watchAuth, watchMovieBooking, watchOrder } from "./store/sagas"; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({ 
  movieBooking:movieBookingReducer,
  order: orderReducer,
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// sagaMiddleware.run(watchAuth);
// sagaMiddleware.run(watchMovieBooking);
// sagaMiddleware.run(watchOrder);
const theme = createMuiTheme({
   typography: {
     useNextVariants: true,
   },
 });

const app = ( 
  
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
    </MuiThemeProvider>
  </Provider>  
);

ReactDOM.render(app, document.getElementById("froot"));
registerServiceWorker();
