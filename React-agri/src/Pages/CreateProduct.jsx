import React from "react";
import "./Product.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";

function Product() {
  return (
    <div>
      <ProductField />
    </div>
  );
}

const ProductField = () => {
  let current_user = JSON.parse(localStorage.getItem("current_user"));
  let user_profile = JSON.parse(localStorage.getItem("user_profile"));
  const profileId = user_profile.id;
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    title: "",
    price_per_unit: "",
    description: "",
    available_quantity: "",
    primary_image: null,
    additional_image_1: null,
    additional_image_2: null,
    profile_id: profileId,
    upi_id: null,
    upi_name: null,
    upi_number: null,
    upi_qr_code: null

  });

  const primary_image = useRef();
  const additional_image_1 = useRef();
  const additional_image_2 = useRef();

  
  async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
  
    const response = await fetch('http://localhost:3000/listings/upload', { // Replace with your actual upload endpoint
      method: 'POST',
      body: formData
    });
  
    const data = await response.json();
    return data.signed_id; // Replace with the actual key for the signed ID in the response
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  // Upload the files and get the signed IDs
//   const primaryImageId = await uploadFile(form.primary_image);
//   const additionalImage1Id = await uploadFile(form.additional_image_1);
//   const additionalImage2Id = await uploadFile(form.additional_image_2);
  const primaryImageId = primary_image.current.files[0];
  const additionalImage1Id = additional_image_1.current.files[0] ;
  const additionalImage2Id = additional_image_2.current.files[0] ;



  // Create the form data for the new listing
  const formData = new FormData();
  Object.keys(form).forEach((key) => {
    if (key === 'primary_image') {
      formData.append(`listing[${key}]`, primaryImageId);
    } else if (key === 'additional_image_1') {
      formData.append(`listing[${key}]`, additionalImage1Id);
    } else if (key === 'additional_image_2') {
      formData.append(`listing[${key}]`, additionalImage2Id);
    } else {
      formData.append(`listing[${key}]`, form[key]);
    }
  });

    // try {
    //     const url = `http://localhost:3000/listings/`;
    //   const response = await fetch(url, {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    //   }

    //   // Handle successful submission
    // } catch (error) {
    //   setError(error.message);
    // }
    fetch('http://localhost:3000/listings', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Control type="hidden" name="profile_id" value={profileId} />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            // value={form.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Price per unit</Form.Label>
          <Form.Control
            type="text"
            name="price_per_unit"
            // value={form.price_per_unit}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Available Quantity</Form.Label>
          <Form.Control
            type="text"
            name="available_quantity"
            // value={form.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Crop name</Form.Label>
          <Form.Control
            type="text"
            name="crop_name"
            // value={form.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            // value={form.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPrimaryImage" className="image-fields">
          <Form.Label>Primary Image</Form.Label>
          <Form.Control
            type="file"
            name="primary_image"
            ref={primary_image}
            onChange={handleFileChange}
          />
          <Form.Label>Primary Image</Form.Label>
          <Form.Control
            type="file"
            name="additional_image_1"
            ref={additional_image_1}
            onChange={handleFileChange}
          />
          <Form.Label>Primary Image</Form.Label>
          <Form.Control
            type="file"
            name="additional_image_2"
            ref={additional_image_2}
            onChange={handleFileChange}
          />
        </Form.Group>

        {/* Repeat for other file fields... */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Product;
