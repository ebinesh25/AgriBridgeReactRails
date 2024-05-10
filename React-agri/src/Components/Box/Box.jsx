import "./Box.css";
import React from "react";
import DefaultThumbnail from "../../pic/grass-roll.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Favorite from "../Favorite/Favorite";

const Box = (props) => {
  const post = props.post;
  const navigate = useNavigate();
  const title = post.title;
  const description = post.description;
  const price = post.price_per_unit;
  const quantity = post.available_quantity;
  const address = post.address;
  const url = post.url;
  const thumbnail = post.thumbnail;
  const listing_id = post.id;
  const fav_state = post.fav_state;

  // Assuming you have the current user ID and item ID available in your React component

  return (
    <div className="sub-box">
      <div className="inner-sub-box">
        <img src={thumbnail || DefaultThumbnail} alt="product" />
        <p className="location">{address.split(", ").slice(0, 2).join(", ")}</p>
      </div>
      <h4>{title}</h4>
      <div className="slide-container">
        {/* <p className="paragraph-style">{description}</p> */}
        <p className="paragraph-style">
          {description.split(" ").slice(0, 8).join(" ") +
            (description.split(" ").length > 8 ? "..." : "")}
        </p>
        <div className="pills">
          <p className="price box">
            Price: {price} ₹ <span>/ Ton</span>{" "}
          </p>
          <div className="buttons">
            <button onClick={() => navigate(url)}>Check</button>
            <Favorite listing_id={listing_id} fav_state={fav_state} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;