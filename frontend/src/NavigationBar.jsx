import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Recipe App</Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">Add Recipe</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={handleRefresh}>Refresh Page</button> {/* button to refresh the page manually */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
