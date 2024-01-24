// Member.js
<<<<<<< HEAD
import React from "react";
import "./Member.css"; // Import the CSS file for Member
=======
import React from 'react';
import './Member.css'; // Import the CSS file for Member
>>>>>>> main

const Member = ({ handleMemberClick }) => {
  return (
    <div className="Member">
<<<<<<< HEAD
      <div className="member-container">
        <div className="member-item">
          <img src={require("./members/rupert.jpg")} alt="Rupert" />
=======
      <h1> SwapSkill Developers</h1>
      <div className="member-container">
        <div className="member-item">
          <img src={require('./members/rupert.jpg')} alt="Rupert" />
>>>>>>> main
          <p>Ruperto Marqueta</p>
        </div>

        <div className="member-item">
<<<<<<< HEAD
          <img src={require("./members/angelo.jpg")} alt="Angelo" />
=======
          <img src={require('./members/angelo.jpg')} alt="Angelo" />
>>>>>>> main
          <p>Angelo Padilla</p>
        </div>

        <div className="member-item">
<<<<<<< HEAD
          <img src={require("./members/ronald.jpg")} alt="Ronald" />
=======
          <img src={require('./members/ronald.jpg')} alt="Ronald" />
>>>>>>> main
          <p>RonaldJr. E. Labrado</p>
        </div>

        <div className="member-item">
<<<<<<< HEAD
          <img src={require("./members/macki.jpg")} alt="MACKI" />
          <p>Macki Tabancay</p>
        </div>
      </div>
      <button className="closeButton" onClick={handleMemberClick}>
        Close
      </button>
=======
          <img src={require('./members/macki.jpg')} alt="MACKI" />
          <p>Macki Tabancay</p>
        </div>
      </div>
      <button className="closeButton" onClick={handleMemberClick}>Close</button>
>>>>>>> main
    </div>
  );
};

export default Member;
