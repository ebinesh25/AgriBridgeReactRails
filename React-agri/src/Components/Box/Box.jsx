import "./Box.css";
import React from 'react';
import DefaultThumbnail from "../../pic/grass-roll.png";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Box = (props) => {
    let post = props.post
    const navigate = useNavigate();
    let title = post.title;
    let description = post.description;
    let price = post.price_per_unit;
    let quantity = post.available_quantity;
    let address = post.address;
    let url = post.url;
    let thumbnail = post.thumbnail;
  
    return (
      <div className="sub-box">
        <div className="inner-sub-box">
          <img src={thumbnail || DefaultThumbnail} alt="product" />
          <p className="location">{address.split(', ').slice(0,2).join(', ')}</p>
  
        </div>
        <h4>{title}</h4>
        <div className="slide-container">
          {/* <p className="paragraph-style">{description}</p> */}
          <p className="paragraph-style">
            {description.split(' ').slice(0, 8).join(' ') + (description.split(' ').length > 8 ? '...' : '')}
          </p>
          <div className="pills">
            <p className="price box">Price: {price} ₹ <span>/ Ton</span>  </p>
            <button  onClick={() => navigate(url)}>Check</button>
          </div>
        </div>
      </div>
    );
  };

  export default Box;