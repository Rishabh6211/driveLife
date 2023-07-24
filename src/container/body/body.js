import React from 'react';
import './body.css'; // Create a new CSS file for header styles
import data from '../../const';

const Main = () => {
  return (
    <main className="main-content">
   <div className="grid-container">
   {
    data.map((item) => {
      return (
        <a href="link_to_image_1_page" className="grid-item">
            <img src={item.image} alt="Image 1" />
            <p>{item.cityName}</p>
          </a>
       
      )

    })
   }
   </div>
    </main>
  );
};

export default Main;
