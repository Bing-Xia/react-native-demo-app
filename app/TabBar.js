'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, TabBarIOS, Text, View } from "react-native";

import Home from "./home/Home";

export default class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'blueTab',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (color: string, pageText: string, num?: number) => {
  	switch(this.state.selectedTab) {
  		case "blueTab":
  			return (<Home/>)
  		default: 
  			return (
  				<View style={[styles.tabContent, {backgroundColor: color}]}>
        			<Text style={styles.tabText}>{pageText}</Text>
        			<Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      			</View>
      			)
  	}
  };

  render() {
    return (
      <TabBarIOS unselectedTintColor="grey" tintColor="black" barTintColor="white">
        <TabBarIOS.Item
       	  title="首页"
          icon={{uri:'home', scale: 2.4}}
          selectedIcon={{uri:'home_filled', scale: 2.4}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', '首页')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="班级"
          icon={{uri:'class', scale: 2}}
          selectedIcon={{uri:'class_filled', scale: 2}}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          renderAsOriginal
          systemIcon="more"
          selectedIcon={{uri:'home_filled', scale: 2}}
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    height: 10,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
  },
});