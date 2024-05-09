import React from "react";
import './Product.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Section from "../Components/Section/Section";

function Product() {
  const location = useLocation();
  console.log("Location", location);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Use Effect ran ");
    fetch(`http://127.0.0.1:3000/${location.pathname}.json`) // replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        console.log("JSON data", data);
        setData(data);
      });
  }, []);

  return (
    <main className="container">
      <CarouselComponent images={data?.images || []} />
      <div className="content">
        <ProductDetails
          name={data?.title}
          price={data?.price_per_unit}
          location={data?.address}
          description={data?.description}
          />
        <ListerDetails
          data={data?.user}
        />
      </div>
      <RecommendedListings data={data} />
    </main>
  );
}

const CarouselComponent = (props) => {
  const images = props.images;
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

const ProductDetails = (props) => {
  return (
    <section className="product-details details">
      <h1>{props.name}</h1>

      <h2 className="price" style={{ paddingLeft: '0px' }}> ₹ {props.price} <span>/ Ton</span></h2>
      <p>{props.location}</p>
      <div className="description">
        <h3>Description</h3>
        <div className="description-content">
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  
  );
};

const ListerDetails = (props) => {
  const name = props.data?.name;
  const designation = props.data?.designation;
  const profileUrl = props.data?.profileUrl;

  return (
    <div className="profile-details details ">
      <div className="content">
        <h2 style={{ paddingLeft: '0px' }}>{name}</h2>
        <h6>{designation}</h6>
        <a href={profileUrl}> View Profile </a>
        <a href={profileUrl}> View Profile </a>
        {/* <a href={chat}> Chat </a> */}
      </div>
    </div>
  );

};

const RecommendedListings = (props) => {
  // const recommends = props.data?.recommendations;

  // console.log("Recommendations", recommends)

  // return (
  //   <section className="recommended-listings">
  //     <h1>Recommended Listings</h1>
  //     <div className="boxes">
  //       {recommends && recommends.map((recommend, index) => (
  //         <Box post={recommend} />
  //       ))}
  //     </div>
  //   </section>
  
  // );
  return (
    <Section title="Recommended Listings" posts={props.data?.recommendations} post_limit={3} />
  
  );
}

// const Top = () => {
//   const navigate = useNavigate();
//   return (
//     <section className="top">
//       <div className="headbox">
//         <div className="image"></div>
//         <div className="rightContent">
//           <header>
//             <h1>Rice Straw</h1>
//             <h2 className="price">₹ 50/kg</h2>
//           </header>
//           <p>Village,City,District,State</p>
//           <div className="sellerMessage">
//             <h3>Messsage from Seller</h3>
//             <div className="sellerContent">
//               <p>Nisi amet ea elit reprehenderit...</p>
//             </div>
//           </div>
//           <div className="buttons">
//             <button className="cartButton" onClick={() => navigate("/items")}>
//               Add to cart
//             </button>
//             <button className="orderButton" onClick={() => navigate("/cart")}>
//               Order now
//             </button>
//           </div>
//         </div>
//       </div>
//       <h1 className="reviewsTitle">Reviews</h1>
//     </section>
//   );
// };

// const Reviews = () => {
//   return (
//     <section className="reviews">
//       <BuyerReview />
//       <BuyerReview />
//     </section>
//   );
// };

// const BuyerReview = () => {
//   return (
//     <div className="buyer">
//       <h3>Buyer name</h3>
//       <div className="review">
//         <p>Ex deserunt esse ullamco non cupidatat id...</p>
//       </div>
//       <div className="images">
//         <img src={require("../pic/grass-roll.png")} alt="" />
//         <img src={require("../pic/grass-roll.png")} alt="" />
//         <img src={require("../pic/grass-roll.png")} alt="" />
//       </div>
//     </div>
//   );
// };

// const Suggest = () => {
//   return (
//     <section className="suggest">
//       <h1>Suggested for you</h1>
//       <div className="boxes">
//         <Box />
//         <Box />
//         <Box />
//         <Box />
//       </div>
//     </section>
//   );
// };

// const Box = () => {
//   return (
//     <div className="box">
//       <div className="innerBox"></div>
//       <div className="boxContent">
//         <div>
//           <h4>head</h4>
//           <p>Qui id incididunt pariatur et</p>
//         </div>
//         <button>check</button>
//       </div>
//     </div>
//   );
// };

export default Product;