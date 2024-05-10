import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Section from "../Section/Section";
import "./SearchPage.css";

function SearchPage () {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const search = query.get('query');

    const [data, setData] = useState(null);

    useEffect(() => { 
        fetch(`http://localhost:3000/home/search?query=${search}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setData(data);
          })      
          .catch(error => {
            console.log(error);
          });
    }, [search]); 

    return (
        <div className="container">
            <h1>Search Page</h1>
            <SearchBar/>
            <Section
                title={`Search Results for ${search}`}
                posts={data}
            />
        </div>
    );
}

const SearchBar = () => {
    return (
        <form className="page-search-bar">
            <input
                type="text"
                placeholder="Search for products"
                className="page-search"
            />
            <button className="page-search-button" type="submit">
                Search
            </button>
        </form>
    );
};

export default SearchPage;