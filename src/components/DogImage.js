import React from 'react';
import './dog.css';

export default function DogImage(props) {

    return (
        <div className='dog-image'>
           <img src = {props.url} />
        </div>    
    )
}