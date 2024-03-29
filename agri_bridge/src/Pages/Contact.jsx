import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>For any queries, you can also reach us at: <a href="mailto:Agribridge@gmail.com">agribridge@gmail.com</a></p>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;