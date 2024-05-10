import React from "react";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Section from "../Components/Section/Section";
import { Form, Button } from "react-bootstrap";

function Profile() {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Use Effect ran ");
    fetch(`http://127.0.0.1:3000/${location.pathname}.json`) // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log("JSON data", data);
        setData(data);
      });
  }, []);

  const myListings = data?.created_listings;
  const likedListings = data?.favorited_listings;

  return (
    <div classsName="container">
      <h1>Profile</h1>
      <ProfileInfo key={data?.details?.id} userDetails={data?.details} />{" "}
      <Section title="My Listings" posts={myListings} />
      <Section title="Liked Listings" posts={likedListings} />
    </div>
  );
}

const ProfileInfo = ({ userDetails }) => {
  const [data, setData] = useState();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setData(userDetails);
  }, [userDetails]);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000${data.url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json", // Ensure the server knows you want a JSON response
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log(responseData);
    setIsEditing(false);
  };

  return (
     <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="multiple-elements field">
          <div className="element name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="lister_name"
              value={data?.lister_name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="element name">
            <Form.Label>Whatsapp Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={data?.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="element name">
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              name="lister_designation"
              value={data?.lister_designation}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </Form.Group>
        <Form.Group controlId="formName" className="field">
          <Form.Label>Address line one</Form.Label>
          <Form.Control
            type="text"
            name="Addr1"
            value={data?.Addr1}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <Form.Group controlId="formName" className="field">
          <Form.Label>Address line two</Form.Label>
          <Form.Control
            type="text"
            name="Addr1"
            value={data?.Addr2}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </Form.Group>
        <Form.Group controlId="formName" className="multiple-elements field">
          <div className="element address">
            <Form.Label>Taluk</Form.Label>
            <Form.Control
              type="text"
              name="Taluk"
              value={data?.Taluk}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="element address">
            <Form.Label>Disctrict</Form.Label>
            <Form.Control
              type="text"
              name="Disctrict"
              value={data?.District}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="element address">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="State"
              value={data?.State}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div className="element address">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="Country"
              value={data?.Country}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </Form.Group>

        {/* Repeat for other fields... */}
        <div className="buttons">
            <Button
            variant="primary"
            type="button"
            onClick={() => setIsEditing(true)}
            >
            Edit
            </Button>
            {isEditing && (
            <Button variant="primary" type="submit">
                Submit
            </Button>
            )}
        </div>
      </Form>

    </div>
  );
};

export default Profile;
