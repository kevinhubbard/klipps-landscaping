import React, {Component} from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import './styles/gallery.css'
import a from './images/a.jpg'
import b from './images/b.jpg'
import c from './images/c.jpg'
import d from './images/d.jpg'
import e from './images/e.jpg'
import f from './images/f.jpg'
import g from './images/g.jpg'
import h from './images/h.jpg'
import i from './images/i.jpg'
import j from './images/j.jpg'
import k from './images/k.jpg'
import l from './images/l.jpg'
import m from './images/m.jpg'
import n from './images/n.jpg'



class Gallery extends Component {
	render() {
		const images = [
			{
				original: a,
				thumbnail: a
			},
			{
				original: b,
				thumbnail: b
			},
			{
				orginal: c,
				thumbnail: c
			},
			{
				orginal: d,
				thumbnail: d
			},
			{
				orginal: e,
				thumbnail: e
			},
			{
				orginal: f,
				thumbnail: f
			},
			{
				orginal: g,
				thumbnail: g
			},
			{
				orginal: h,
				thumbnail: h
			},
			{
				orginal: i,
				thumbnail: i
			},
			{
				orginal: j,
				thumbnail: j
			},
			{
				orginal: k,
				thumbnail: k
			},
			{
				orginal: l,
				thumbnail: l
			},
			{
				orginal: m,
				thumbnail: m
			},
			{
				orginal: n,
				thumbnail: n
			}]
		return  <ImageGallery className='gallery' items={images}>
				</ImageGallery>
	}
}

export default Gallery