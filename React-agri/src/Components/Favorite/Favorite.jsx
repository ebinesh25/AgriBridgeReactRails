import './Favorite.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function Favorite({ listing_id , fav_state }) {
    const [isFavorite, setIsFavorite] = useState(fav_state);

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
            setIsFavorite(!isFavorite); // Update favorite state
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
        <button
        className={isFavorite ? 'favorited' : ''} 
        onClick={() => toggleFavoriteItem().catch(console.error)}>
        <FontAwesomeIcon icon={faHeart} />
        </button>
    );
}
export default Favorite;