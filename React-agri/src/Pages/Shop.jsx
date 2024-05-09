import "./Shop.css";
import React from 'react';
import DefaultThumbnail from "../pic/grass-roll.png";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Use Effect ran ");
    fetch('http://127.0.0.1:3000/home/index.json') // replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        console.log("JSON data", data);
        setData(data);
      });
  }, []);
  return (
    <div className="box1">
      <Hero />
      <Content data={data}/>
    </div>
  );
}

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Transforming waste into worth</h1>
        <SearchBar />
      </div>
      {/* <p style={{ fontSize: "20px" }}>or</p>
      <div className="list-button">
        <div onClick={() => navigate("/product")} className="button">
          List your By-products
        </div>
      </div> */}
    </div>
  );
};

const SearchBar = () => { 
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => { 
    e.preventDefault();

    fetch(`http://localhost:3000/home/search?query=${search}`)
    .then(response => response.json())
    .then(data => {
      // handle your data here
      console.log(data);
    })
    .catch(error => {
      // handle your error here
      console.log(error);
    });
  };
  
  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for products"
          value={search}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const Content = (props) => {

  let jsonData = props.data;  
  console.log(jsonData);
 
  if (jsonData && jsonData.post) {
    if (jsonData.post.hasOwnProperty('suggested')) {
      let suggested_posts = jsonData.post.suggested;
      let more_posts = jsonData.post.more_posts;

      return (
        <div className="container" >
          <Section title="Suggested for you" posts={suggested_posts}/>
          <Section title="More for you" posts={more_posts}/>
        </div>
      );
    } else {
      let posts = jsonData.post;
      return (
        <div className="container" >
          <Section title="Explore the listings" posts={posts}/>
        </div>
      );
    }
  } else {
    return <div>Loading...</div>;
  }

 
};

  const Section = (props) => {

    let title = props.title;
    let posts = props.posts;
    let totalPosts = posts.length;
    let post_limit = 8;
    console.log("Total posts", totalPosts)
    let title_key = title.replace(/\s+/g, '-').toLowerCase();
    const [lastIndex, setLastIndex] = useState(post_limit);

    const showMore = () => {
      let cards = document.querySelectorAll(`.${title_key}`);
      for (let i = lastIndex + 1; i <= lastIndex + post_limit && i < cards.length; i++) {
        cards[i].style.display = 'block';
      }
      setLastIndex(lastIndex + post_limit);
    };

    useEffect (() => {
      console.log("Hiding cards for ", title_key)
      let cards = document.querySelectorAll(`.${title_key}`);
      cards.forEach((card, index) => {
        if (index >= post_limit){
          card.style.display = 'none';
        }
      });
      let button = document.querySelector(`button[data-title=${title_key}]`);
      if (button) {
        button.addEventListener('click', showMore);
      }
    },[title_key]);

  return (
    
    <div className="section-container" style={{marginTop:"10%",marginBottom: "10%"}}>
      <h2>{title}</h2>
      <div className="topic-line"></div>
      <div className="posts">
        {
          posts.map((post, index) => (
            <div className={`${title_key}`} data-index={index}>
              <Box post={post}/>
            </div>
          ))
        }
      </div>

      {(totalPosts > 8 )&& (
        <div className="loadmore-container">
          <button className={"loadmore"}data-title={title_key}>Load More</button>
        </div>
      )}
    </div>
  )};

export const Box = (props) => {
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

export default Home;
