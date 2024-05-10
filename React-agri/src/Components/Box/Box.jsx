import "./Box.css";
import React from 'react';
import DefaultThumbnail from "../../pic/grass-roll.png";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


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
    let listing_id = post.id;

    // Assuming you have the current user ID and item ID available in your React component

const toggleFavoriteItem = async () => {
  console.log("TogglingS")
  const profileId = window.user_profile.id; // Replace with the actual user ID
  const listingId = listing_id; // Replace with the actual item ID

  try {
    const response = await fetch('http://localhost:3000/favorite_items/toggle_favorite_item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profile_id: profileId, listing_id: listingId }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Output success message
    } else {
      const errorData = await response.json();
      console.error(errorData.error); // Output error message
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

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
            <div className="buttons">
              <button  onClick={() => navigate(url)}>Check</button>
              <button onClick={() => toggleFavoriteItem().catch(console.error)}>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Box;