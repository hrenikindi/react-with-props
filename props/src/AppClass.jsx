import React, { Component } from "react";
import "./App.css";
import DataComponent from './components/DataComponent';

export default class AppClass extends Component {
  render() {
    const Images = DataComponent();
    
    const img = Images.map(i=>(
        <img key={i.id} src={i.img}/>

    ));

    return (
      <div className="image-container">
        <h1>Images</h1>
        {img}
      </div>
    );
  }
}
