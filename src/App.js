import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import RootNavigator from './config/navigation';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
