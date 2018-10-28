import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import StoreSettings from './containers/StoreSettings/StoreSettings';
import AddressSettings from './containers/AddressSettings/AddressSettings';

class App extends Component {
  
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={StoreSettings} />
        <Route path="/AddressSettings" component={AddressSettings} />
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
