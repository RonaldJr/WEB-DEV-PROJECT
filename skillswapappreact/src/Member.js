// Member.js
import React from 'react';
import './Member.css'; // Import the CSS file for Member

const Member = ({ handleMemberClick }) => {
  return (
    <div className="Member">
      <h1> SwapSkill Developers</h1>
      <div className="member-container">
        <div className="member-item">
          <img src={require('./members/rupert.jpg')} alt="Rupert" />
          <p>Ruperto Marqueta</p>
        </div>

        <div className="member-item">
          <img src={require('./members/angelo.jpg')} alt="Angelo" />
          <p>Angelo Padilla</p>
        </div>

        <div className="member-item">
          <img src={require('./members/ronald.jpg')} alt="Ronald" />
          <p>RonaldJr. E. Labrado</p>
        </div>

        <div className="member-item">
          <img src={require('./members/macki.jpg')} alt="MACKI" />
          <p>Macki Tabancay</p>
        </div>
      </div>
      <button className="closeButton" onClick={handleMemberClick}>Close</button>
    </div>
  );
};

export default Member;
