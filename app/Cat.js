import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Navigator, TouchableHighlight } from 'react-native';

let IconData = [{index: 0,text : '成长轨迹', link : ''},
	{index: 1,text : '数据分析', link : ''},
	{index: 2,text : '已报课程', link : ''},
	{index: 3,text : '日程安排', link : ''},
	{index: 4,text : '装备纪录', link : ''},
	{index: 5,text : '伤病预警', link : ''},
	{index: 6,text : '圈    子', link : ''},
	{index: 7,text : '通    知', link : ''},
	{index: 8, text : '设    置', link : ''}];

export default class Cat extends Component {

	constructor(props) {
		super(props);
		this.state = { pressStatus: false}
	}

	renderImg(i) {
		switch(i) {
			case 0: 
				return (<Image source={require('../img/icons/icon1.png')} style={styles.boxImg}/>);
			case 1:
				return (<Image source={require('../img/icons/icon2.png')} style={styles.boxImg}/>);
			case 2: 
				return (<Image source={require('../img/icons/icon3.png')} style={styles.boxImg}/>);
			case 3:
				return (<Image source={require('../img/icons/icon4.png')} style={styles.boxImg}/>);
			case 4: 
				return (<Image source={require('../img/icons/icon5.png')} style={styles.boxImg}/>);
			case 5:
				return (<Image source={require('../img/icons/icon6.png')} style={styles.boxImg}/>);
			case 6: 
				return (<Image source={require('../img/icons/icon7.png')} style={styles.boxImg}/>);
			case 7:
				return (<Image source={require('../img/icons/icon8.png')} style={styles.boxImg}/>);
			case 8: 
				return (<Image source={require('../img/icons/icon9.png')} style={styles.boxImg}/>);
			}
	}

	renderItems(data) {
		var me = this;

		var onPressBtn = function() {
			const {navigator} = me.props;
			if (navigator) {
				navigator.push({title: 'Detail view', id: 'detail'});
			}
		}

		return data.map(function(item, i) {
			let touchKey = 'touch' + i;
			let txtKey = 'text' + i;
			let viewKey = 'view' + i;
			return (
				<TouchableHighlight key={touchKey} 
					style={styles.boxItem} 
					onPress={onPressBtn}
					>
					<View key={viewKey} >
						{me.renderImg(item.index)}
						<Text key={txtKey} style={styles.boxText}>{item.text}</Text>
					</View>
				</TouchableHighlight>
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
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 2,
		borderColor: '#ddd'
	},
	boxItemPress: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
		borderWidth: 2,
		borderColor: '#ddd'
	},
	boxImg: {
		width: 40,
		height: 40,
		marginBottom: 10,
	},
	boxText: {
		fontSize: 12,
		color: '#333',
	}
})