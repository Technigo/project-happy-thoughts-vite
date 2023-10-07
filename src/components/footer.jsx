import React from 'react';

export function Footer() {
  return (
    <React.Fragment>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Project Happy Thoughts</p>
      <span>Developed by Stenli Suryadinata</span>
      <div className="social-media">
      <p>Original concept by Technigo</p>
      </div>
    </footer>
    </React.Fragment>
  );
}