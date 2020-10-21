import React from 'react';

const ButtonFetch = (props) => {
    return (
    <button onClick = {props.click}>{props.active ? 'HIDE PICTURE' : 'SHOW PICTURE'}</button>
     );
}
 
export default ButtonFetch;