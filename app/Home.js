import React, { Component, PropTypes } from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

var Dimensions = require('Dimensions');

import Cat from './Cat';
import NotiTab from './NotiTab';
import ImageSliders from './ImageSliders';

var { width, height, scale } = Dimensions.get('window');

export default class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { pressStatus: false}
	}

	render() {
		return (
			<View style={styles.sliderContainer}>
				<ImageSliders/>
				<NotiTab/>
				<Cat navigator={this.props.navigator}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sliderContainer: {
		marginTop: 20,
		height: height,
		backgroundColor: '#ddd',
	}	
})