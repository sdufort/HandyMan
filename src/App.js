import React, { Component } from 'react';
import Router from './Router';
import { createStore, applyMiddleware, compose } from 'redux';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.client = {};
    this.store = {};
  }

  render() {
    this.client = new ApolloClient({
      reduxRootSelector: 'differentKey',
    });

    this.store = createStore(
      reducers,
      {},
      compose(
        applyMiddleware(ReduxThunk, this.client.middleware()),
      ),
    );

    return (
      <ApolloProvider store={this.store} client={this.client}>
        <Router />
      </ApolloProvider>
    );
  }
}
