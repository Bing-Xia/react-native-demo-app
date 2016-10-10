import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Navigator, TouchableHighlight } from 'react-native';

export default class Detail extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		var me = this;
		var _onPress = function() {
			me.props.navigator.push({title:'Home view', id:'home'});	
		}
		return (
			<View style={{flex: 1, marginTop: 20}}>
				<Text style={{fontSize: 30, color: 'red'}} onPress={_onPress}>碉堡了</Text>
			</View>
		)
	}

}