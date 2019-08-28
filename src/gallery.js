import React, {Component} from 'react'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
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
		return  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={a} alt="1 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={b} alt="2 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={c} alt="3 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={d} alt="4 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={e} alt="5 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={f} alt="6 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={g} alt="7 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={h} alt="8 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={i} alt="9 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={j} alt="10 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={k} alt="11 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={l} alt="12 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={m} alt="13 slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={n} alt="14 slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
	}
}

export default Gallery