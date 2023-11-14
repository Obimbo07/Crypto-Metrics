import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = [
  { title: 'Home', path: '/', className: 'noactive-link' },
  { title: 'Details', path: '/details', className: 'noactive-link' },
];

function NavBar() {
  return (
    <div>
      <div className="Logo-cont">
        <h2>METRICS</h2>
      </div>
      <div>
        {Links.map((link) => (
          <li className="navLink" key={link.title}>
            <NavLink to={link.path} className={link.className}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </div>
    </div>

  );
}

export default NavBar;
