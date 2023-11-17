import React from 'react';
import { Link } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import '../App.css';

function NavBar() {
  return (
    <div className="nav-section">
      <div>
        {/* Use Link instead of NavLink */}
        <Link to="/" className="links">
          <FaLessThan />
        </Link>
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
