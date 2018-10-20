import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import FoodStore from './containers/FoodStore/FoodStore';
// import MovieSeatBooking from './containers/MovieShows/MovieSeatBooking';
// import Logout from './containers/Auth/Logout/Logout';
// import * as actions from './store/actions/index';

class App extends Component {

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={FoodStore} />
        <Redirect to="/" /> 
      </Switch>
    ); 

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}


export default withRouter( App );
