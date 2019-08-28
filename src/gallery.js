import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/gallery.css'
import One from './images/one.jpg'



class Gallery extends Component {
	render() {
		const images = [
			{
				original: One,
				thumbnail: One
			}]
		return  <ImageGallery className='gallery' items={images}>
				</ImageGallery>
	}
}

export default Gallery