import React, { useState } from "react";
import "../App.css";
import { BASE_URL } from '../utils/consts.js'
import axios from "axios";

const CreateLinks = () => {
  // State to store the pasted link
  const [link, setLink] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    if (link) {
      // Logic to shorten the link 
      await axios.post(`${BASE_URL}/`, { redirectUrl: link });
      console.log("Link to shorten:", link);

      // Clear the input field after submission
      setLink("");
    }
  };

  return (
    <div className="paste-link-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Paste link here"
          value={link}
          onChange={handleInputChange}
          className="link-input"
        />
        <button type="submit">
          Create Link
        </button>
      </form>
    </div>
  );
};

export default CreateLinks;

// 1 user types url in the input
// 2 user presses create which creates a post request using the inputted URL to create a short url
// 3 once the database gets updated the /urls list will get updated and another list gets added to the linkList


