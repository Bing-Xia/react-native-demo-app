import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Navigator, TouchableOpacity } from 'react-native';

let IconData = [{index: 0,text : '标题', link : ''},
	{index: 1,text : '标题', link : ''},
	{index: 2,text : '标题', link : ''},
	{index: 3,text : '标题', link : ''},
	{index: 4,text : '标题', link : ''},
	{index: 5,text : '标题', link : ''},
	{index: 6,text : '标题', link : ''},
	{index: 7,text : '标题', link : ''},
	{index: 8,text : '标题', link : ''}];

export default class GridMenu extends Component {

	constructor(props) {
		super(props);
		this.state = { pressStatus: false}
	}

	renderImg(i) {
		switch(i) {
			case 0: 
				return (<Image source={require('image!grid-menu-icon1')} style={styles.boxImg}/>);
			case 1:
				return (<Image source={require('image!grid-menu-icon2')} style={styles.boxImg}/>);
			case 2: 
				return (<Image source={require('image!grid-menu-icon3')} style={styles.boxImg}/>);
			case 3:
				return (<Image source={require('image!grid-menu-icon4')} style={styles.boxImg}/>);
			case 4: 
				return (<Image source={require('image!grid-menu-icon5')} style={styles.boxImg}/>);
			case 5:
				return (<Image source={require('image!grid-menu-icon6')} style={styles.boxImg}/>);
			case 6: 
				return (<Image source={require('image!grid-menu-icon7')} style={styles.boxImg}/>);
			case 7:
				return (<Image source={require('image!grid-menu-icon8')} style={styles.boxImg}/>);
			case 8: 
				return (<Image source={require('image!grid-menu-icon9')} style={styles.boxImg}/>);
			}
	}

	renderItems(data) {
		var me = this;

		var onPressItem = function() {
			const {navigator} = me.props;
			if (navigator) {
				navigator.push({title: this.data, id: 'detail'});
			}
		}

		return data.map(function(item, i) {
			let touchKey = 'text' + i;
			let txtKey = 'text' + i;
			let viewKey = 'view' + i;
			return (
				<TouchableOpacity key={touchKey} style={styles.boxItem} data={item.text} onPress={onPressItem}>
					<View key={viewKey}>
						{me.renderImg(item.index)}
						<Text key={txtKey} style={styles.boxText}>{item.text}</Text>
					</View>
				</TouchableOpacity>
			)
		})
	}

	render() {
		return (
			<View style={styles.box}>
				<View style={styles.boxRow}>
					{this.renderItems(IconData.slice(0,3))}
				</View>
				<View style={styles.boxRow}>
					{this.renderItems(IconData.slice(3,6))}
				</View>
				<View style={styles.boxRow}>
					{this.renderItems(IconData.slice(6,9))}
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({ 
	box: {
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 4,
		paddingRight: 4
	},
	boxRow: {
		flexDirection: 'row',
		marginBottom: 1,
		height: 80,
	},
	boxItem: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#eee'
	},
	boxImg: {
		width: 40,
		height: 40,
		marginBottom: 10,
	},
	boxText: {
		fontSize: 12,
		textAlign: 'center',
		color: '#333',
	}
})