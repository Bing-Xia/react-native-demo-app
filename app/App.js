import React, { Component, PropTypes } from 'react';
import { AppRegistry, Navigator, View, Text, StyleSheet } from 'react-native';

// import Home from './app/Home';
// import Detail from './app/Detail';
import TabBar from './TabBar';

export default class demo_app extends Component {

  render() {
    return (
      <View style={styles.container}>
          <TabBar/>
      </View>
      )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})