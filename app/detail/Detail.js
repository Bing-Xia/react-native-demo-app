import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Navigator, TouchableHighlight } from 'react-native';

export default class Detail extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var me = this;
		var _onPress = function() {
			// me.props.navigator.push({title:'Home view', id:'home'});
			me.props.navigator.pop();	
		}
		return (
			<View style={styles.container}>
				<Text style={styles.txt} onPress={_onPress}>{me.props.route.title}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({ 
	container: {
		flex: 1,
		backgroundColor: 'grey'
	},
	txt: {
		fontSize: 30, 
		color: '#fff'
	}
})