import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, Button } from 'react-native';

export default class NotiTab extends Component {

	render() {
		return (
			<View style={styles.notiBox}>
				<View style={styles.notiRow}>
					<Text style={styles.boldFont}>周二</Text>
					<Text style={{color: 'orange', fontSize: 14}}>2016-10-10</Text>
				</View>
				<View style={styles.notiRow}>
					<Text>启迪精英1班</Text>
					<Text>18:00 -- 20:00</Text>
				</View>
				<View style={styles.notiRow}>
					<View style={styles.notiBtn}>
						<Text style={{color:'#fff'}}>请假</Text>	
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	notiBox: {
		height: 70,
		flexDirection: 'row',
		backgroundColor: '#fff',
		paddingTop: 4,
		paddingBottom: 4,
		paddingLeft: 4,
		paddingRight: 4
	},
	notiRow: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	boldFont: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'orange'
	},
	notiBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'orange', 
		borderRadius: 4,
		height: 30, 
		width: 50
	}
})