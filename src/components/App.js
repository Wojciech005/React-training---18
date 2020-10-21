
import React, { Component } from 'react';
import './App.css';
import ButtonFetch from './ButtonFetch'
import PhotoPocket from './PhotoPocket.js'

const API = 'data/images.json'   

class App extends Component {
state = {
  images: [],
  active: false
}

handleShowImages = () => {
  fetch(API)
  .then(response => response.json())
  .then(data => {
    const images = data.images;

    this.setState({
      images: images,
      active: !this.state.active
    })
  })
}
  
  render() {
    console.log(this.state.active)
    return (
      <div>
        
    <ButtonFetch click = {this.handleShowImages} active = {this.state.active}/>
    <PhotoPocket images={this.state.images} active = {this.state.active}/>
      </div>
    )
  }
}

export default App;