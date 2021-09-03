import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';


class App extends Component {
  state = {
    query: ''
  }

  inputSubmitHandler = query => {
    this.setState({ query });
  }

  render(){
    return (
      <div>
        <Searchbar onSubmit={this.inputSubmitHandler} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
