import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/gallery.css'
import One from './images/1.jpg'
import two from './images/2.jpg'
import three from './images/3.jpg'
import four from './images/4.jpg'
import five from './images/5.jpg'
import six from './images/6.jpg'
import seven from './images/7.jpg'
import eight from './images/8.jpg'
import nine from './images/9.jpg'
import ten from './images/10.jpg'
import eleven from './images/11.jpg'
import twelve from './images/12.jpg'
import thirteen from './images/13.jpg'
import fourteen from './images/14.jpg'


class Gallery extends Component {
	render() {
		const images = [
			{
				original: One,
				thumbnail: One
			},
			{
				original: two,
				thumbnail: two
			},
			{
				original: three,
				thumbnail: three
			},
			{
				original: four,
				thumbnail: four
			},
			{
				original: five,
				thumbnail: five
			},
			{
				original: six,
				thumbnail: six
			},
			{
				original: seven,
				thumbnail: seven
			},
			{
				original: eight,
				thumbnail: eight
			},
			{
				original: nine,
				thumbnail: nine
			},
			{
				original: ten,
				thumbnail: ten
			},
			{
				original: eleven,
				thumbnail: eleven
			},
			{
				original: twelve,
				thumbnail: twelve
			},
			{
				original: thirteen,
				thumbnail: thirteen
			},
			{
				original: fourteen,
				thumbnail: fourteen
			}]
		return  <ImageGallery className='gallery' items={images}>
				</ImageGallery>
	}
}

export default Gallery