import React, { Component, PropTypes } from 'react';
import {View, ScrollView, StyleSheet, Text, Navigator} from 'react-native';

var Dimensions = require('Dimensions');

import GridMenu from './GridMenu';
import NotiTab from './NotiTab';
import ImageSliders from './ImageSliders';

import Detail from '../detail/Detail';

var { width, height, scale } = Dimensions.get('window');

export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navigator
				initialRoute={{id: 'home', title: 'Home View'}}
				renderScene={this._renderScene}
				configureScene={this._configureScene}
			/>
		)
	}

	_renderScene(route, navigator) {
		switch (route.id) {
			case 'detail':
				return (<Detail route={route} navigator={navigator} />);
			default: 
				return (
					<ScrollView style={styles.container}>
						<ImageSliders/>
						<NotiTab/>
						<GridMenu navigator={navigator}/>
					</ScrollView>
					)
		}
	}

	_configureScene() {
		return Navigator.SceneConfigs.FloatFromRight;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: height,
		backgroundColor: '#eee'
	}
})