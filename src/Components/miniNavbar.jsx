import React from 'react';
import './miniNavbar.css';

const App = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <ul className="navbar-list">
          <li className="navbar-item"><i className="fas fa-shield-alt"></i> Suitable Guranty</li>
          <li className="navbar-item"><i className="fas fa-credit-card"></i> Purchase in Installments</li>
          <li className="navbar-item"><i className="fas fa-undo"></i> 20 days right of return</li>
          <li className="navbar-item"><i className="fas fa-shipping-fast"></i> Free Shipping</li>
        </ul>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" alt="Flag of Pakistan" className="flag-icon" />
        <span style={{marginTop:"-20px", marginLeft:'10px'}}>Pk</span>
      </div>
    </div>
  );
};

export default App;

