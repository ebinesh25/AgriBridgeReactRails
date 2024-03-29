import React from "react";
import './Product.css';
import { useNavigate } from "react-router-dom";

function Product() {
  return (
    <main className="container">
      <Top />
      <Reviews />
      <Reviews />
      <Suggest />
    </main>
  );
}

const Top = () => {
  const navigate = useNavigate();
  return (
    <section className="top">
      <div className="headbox">
        <div className="image"></div>
        <div className="rightContent">
          <header>
            <h1>Rice Straw</h1>
            <h2 className="price">₹ 50/kg</h2>
          </header>
          <p>Village,City,District,State</p>
          <div className="sellerMessage">
            <h3>Messsage from Seller</h3>
            <div className="sellerContent">
              <p>Nisi amet ea elit reprehenderit...</p>
            </div>
          </div>
          <div className="buttons">
            <button className="cartButton" onClick={() => navigate("/items")}>
              Add to cart
            </button>
            <button className="orderButton" onClick={() => navigate("/cart")}>
              Order now
            </button>
          </div>
        </div>
      </div>
      <h1 className="reviewsTitle">Reviews</h1>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="reviews">
      <BuyerReview />
      <BuyerReview />
    </section>
  );
};

const BuyerReview = () => {
  return (
    <div className="buyer">
      <h3>Buyer name</h3>
      <div className="review">
        <p>Ex deserunt esse ullamco non cupidatat id...</p>
      </div>
      <div className="images">
        <img src={require("../pic/grass-roll.png")} alt="" />
        <img src={require("../pic/grass-roll.png")} alt="" />
        <img src={require("../pic/grass-roll.png")} alt="" />
      </div>
    </div>
  );
};

const Suggest = () => {
  return (
    <section className="suggest">
      <h1>Suggested for you</h1>
      <div className="boxes">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </section>
  );
};

const Box = () => {
  return (
    <div className="box">
      <div className="innerBox"></div>
      <div className="boxContent">
        <div>
          <h4>head</h4>
          <p>Qui id incididunt pariatur et</p>
        </div>
        <button>check</button>
      </div>
    </div>
  );
};

export default Product;