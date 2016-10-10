import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

import ImageSlider from 'react-native-image-slider';

var images = ['https://placeimg.com/640/480/any',
        'https://placeimg.com/640/480/any',
        'https://placeimg.com/640/480/any'];

export default class ImageSliders extends Component {

	render() {
		return (
			<ImageSlider images={images}/>
		)
	}

}