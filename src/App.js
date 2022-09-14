import './App.css';
import Header from "./components/Header"
import Dog from "./components/Dog"
import React, { Component } from 'react';

import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: []
    }
  }

  componentDidMount() {
      fetch("https://dog.ceo/api/breeds/image/random/50")
       .then((res) => res.json())
       .then((data) => {
        this.setState( {dogs: data.message})
       })
  }
  render() {
    return (
      <div>
      <Header/>
      <Dog dogs = {this.state.dogs}/>
      { <ToastContainer
       position="top-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       transition = {Slide}
       />}
     </div>
    )
  }
}

export default App;
