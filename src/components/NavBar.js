import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import '../App.css';

function NavBar() {
  return (
    <div className="nav-section">
      <div>
        <NavLink to="/" className="links">
          <FaLessThan />
        </NavLink>
      </div>
      <div className="Logo-cont">
        <h4>CRYPTO METRICS</h4>
      </div>
      <div className="itemsActions">
        <FaMicrophone className="itm-act" />
        <FiSettings className="itm-act" />
      </div>
    </div>

  );
}

export default NavBar;
