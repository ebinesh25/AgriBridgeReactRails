import "./Section.css";
import React from 'react';
import { useEffect, useState } from 'react';
import Box from '../Box/Box';


const Section = (props) => {

    let title = props.title;
    let posts = props.posts;
    let totalPosts = posts ? posts.length : 0;
    let post_limit = props.post_limit ? props.post_limit : 6;

    console.log("Total posts", totalPosts)
    console.log("Post limit", post_limit)

    let title_key = title.replace(/\s+/g, '-').toLowerCase();
    const [lastIndex, setLastIndex] = useState(post_limit);

    const showMore = () => {
      let cards = document.querySelectorAll(`.${title_key}`);
      for (let i = lastIndex ; i < lastIndex + post_limit && i < cards.length; i++) {
        cards[i].style.display = 'block';
      }
      setLastIndex(lastIndex + post_limit);
    };

    useEffect (() => {
        console.log('useEffect is running');

        hide_it();
    },[posts]);

    const hide_it = () => {
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
    }


  return (
    
    <div className="section-container" style={{marginTop:"10%",marginBottom: "10%"}}>
      <h2>{title}</h2>
      <div className="topic-line"></div>
      <div className="posts">
        {
          posts && posts.map((post, index) => (
            <div className={`${title_key}`} data-index={index+1}>
              <Box post={post}/>
            </div>
          ))
        }
      </div>

      {(totalPosts > post_limit )&& (
        <div className="loadmore-container">
          <button className={"loadmore"}data-title={title_key}>Load More</button>
        </div>
      )}
    </div>
  )};

  export default Section;