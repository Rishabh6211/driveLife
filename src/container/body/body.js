import React from 'react';
import './body.css'; // Create a new CSS file for header styles
import data from '../../const';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main-content">
   <div className="grid-container">
   {
    data.map((item) => {
      return (
        <a href="/image/1" className="grid-item">
          {/* <Link to="/image/1"> */}
            <img src={item.image} alt="Image 1" />
            {/* </Link> */}
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
