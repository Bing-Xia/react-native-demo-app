import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ImageSlider from 'react-native-image-slider';

var images = ['https://pic1.zhimg.com/v2-76b2ba8904d67f24688180fb6780d0c4.jpg',
        'https://pic3.zhimg.com//3b04e1791050bbc513e5a6071abea1a6.jpg',
        'https://pic3.zhimg.com//6002bc906b7aa43b44ff1a862651dc66.jpg'];

export default class ImageSliders extends Component {

	render() {
		return (
			<ImageSlider images={images}/>
		)
	}

}