import React from 'react';
import './PhotoPocket.css';

const PhotoPocket = (props) => {

    const images = props.images.map(image => (
        <div key={image.id}>
            <h1>{image.text}</h1>
            <img src={image.photo} alt={image.photo}/>
        </div>
    ))
    return ( 
    <div>{props.active ? images : null}</div>
     );
}
 
export default PhotoPocket;