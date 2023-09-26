import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function NotFound() {
  return (
    <div className="text-center">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFound;
