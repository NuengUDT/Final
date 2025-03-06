import React from 'react';

export const Footer = () => {
  return (
    <footer className="text-center py-3">
      <p>&copy; {new Date().getFullYear()} BMI Calculator App. All rights reserved.</p>
    </footer>
  );
};