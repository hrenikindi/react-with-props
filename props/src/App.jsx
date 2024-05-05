import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';

function App() {
  const Images = DataComponent();

  const images = Images.map(item => (
    <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
  ));

  return (
    <div className="image-container">
      <h1>Images</h1>
      {images}
    </div>
  );
}

export default App;
