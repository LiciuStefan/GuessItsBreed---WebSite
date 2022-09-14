import React from 'react';
import DogImage from './DogImage';
import './dog.css';

import { toast } from 'react-toastify';

export default function Dog(props) {
  const dogsArray = props.dogs.map((dogURL) => {
    return <DogImage url = {dogURL}/>
  })
  
  const [dogImg, dogImgState] = React.useState("");
  const [formData, setFormData] = React.useState({
    breed: ""
  });

  function getDogIndex(a, b) {
    {
      return Math.floor(Math.random() * (b - a) + a);
    }
  }

  function setNewDogImage() {
    //e.preventDefault();
    const dogIndex = getDogIndex(0, dogsArray.length);
    let url = dogsArray[dogIndex].props.url;
    dogImgState(url);
  }

  function handleChange(event) {
    const {
      name,
      value
    } = event.target;
    setFormData(prevFormData => {
      return { ...prevFormData,
        [name]: value
      };
    });
  }

  function handleSubmit(e) {
    ///Notification:
    e.preventDefault();
    let breedInfo = dogImg.substr(30, dogImg.substr(30).indexOf("/")); //getting breed name

    console.log(breedInfo);

    if (breedInfo.indexOf(formData.breed) != -1 && formData.breed != '' && breedInfo != '') {
      toast.success('You are right!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      });
      formData.breed = '';
      setNewDogImage();
    } else {
      toast.error('Try again!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined
      });
    }
  }


  return (
    <main>
    <form className="form" onSubmit={handleSubmit}>
        <input 
            type = "text"
            placeholder = "What breed is the dog in the photo below?"
            name = "breed"
            value =  {formData.breed}
            onChange = {handleChange}
            className = "form-input"
        />
        <button className='form-input-sub'>Submit</button>
    </form>
    <button className='form-button' onClick={setNewDogImage}>Get new dog image</button>
    
    <div className='div-of-dog-image'>
        <img src = {dogImg} className = "dog-image" />
    </div>
</main>
  )
}
