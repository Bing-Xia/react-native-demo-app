/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Navigator } from 'react-native';

import Home from './app/Home';
import Detail from './app/Detail';

class demo_app extends Component {
  render() {
    return (
      <Navigator style={{flex:1}}
        initialRoute={{ title: 'Home View', id: 'home' }}
        renderScene={this.navigatorRenderScene}
        configureScene={this.naviCongif}
      />
    )
  }

  naviConfig(route, navigator) {
    Navigator.SceneConfigs.FloatFromBottom;
  }

  navigatorRenderScene(route, navigator) {
    let _navigator = navigator;
    switch(route.id) {
      case 'home':
        return (<Home navigator={navigator}/>)
      case 'detail':
        return (<Home navigator={navigator}/>)
    }
  }
}

AppRegistry.registerComponent('demo_app', () => demo_app);
