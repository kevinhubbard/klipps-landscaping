import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/gallery.css'

class Gallery extends Component {
	render() {
		const images = [
			{
				original: '/images/1.jpg'
			},
			{
				original: '/images/2.jpg'
			},
			{
				original: '/images/3.jpg'
			},
			{
				original: '/images/4.jpg'
			},
			{
				original: '/images/5.jpg'
			},
			{
				original: '/images/6.jpg'
			},
			{
				original: '/images/7.jpg'
			},
			{
				original: '/images/8.jpg'
			},
			{
				original: '/images/9.jpg'
			},
			{
				original: '/images/10.jpg'
			},
			{
				original: '/images/11.jpg'
			},
			{
				original: '/images/12.jpg'
			},
			{
				original: '/images/13.jpg'
			},
			{
				original: '/images/14.jpg'
			}]
		return  <ImageGallery className='gallery' items={images}/>
	}
}

export default Gallery