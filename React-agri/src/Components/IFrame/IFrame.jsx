import React from "react";
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Favorite from "../Favorite/Favorite";

  
const IFrame = ({ src, button_text, profile, context, listing, className}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const navigate = useNavigate();
  
    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  
    useEffect(() => {
      function handleMessage(event) {
        if (event.origin !== "http://localhost:3000") return;
        console.log("Event received", event.data);
        if (event.data && event.data.redirectUrl) {
          const url = event.data.redirectUrl
          console.log("Redirecting to", url);
          closeModal();
          navigate(url);
        }
      }
    
      window.addEventListener("message", handleMessage);
    
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }, [modalIsOpen]);
  
    return (
      <div>
        {/* {!profile && (<button className={className} onClick={openModal}>{button_text}</button>)} */}
        {/* {(profile && context == 'favorite') && (<Favorite listing_id={listing_id} fav_state={false} />)}
        {(profile && context == 'listing') && (<a href={listing}></a>)} */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel={button_text}
          style={{
            content: {
              overflow: 'hidden'
            }
          }}
        >
          <iframe src={src} width="100%" height="100%" style={{overflow: 'none'}}></iframe>
        </Modal>
      </div>
    );
}

export default IFrame;