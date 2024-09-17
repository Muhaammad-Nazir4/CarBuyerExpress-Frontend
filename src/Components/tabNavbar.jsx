import React from 'react';
import { NavLink } from 'react-router-dom';
import './tabNavbar.css'; 

export default function App() {
  return (
    <div className="tabnav">
      <NavLink exact to="/" className="tabnavlink" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/rims" className="tabnavlink" activeClassName="active">
        RIMS & TYRES
      </NavLink>
      <NavLink to="/photoGallery" className="tabnavlink" activeClassName="active">
        PHOTO GALLERY
      </NavLink>
      <NavLink to="/contact" className="tabnavlink" activeClassName="active">
        CONTACT
      </NavLink>
      <NavLink to="/information" className="tabnavlink" activeClassName="active">
        INFORMATION
      </NavLink>
    </div>
  );
}
