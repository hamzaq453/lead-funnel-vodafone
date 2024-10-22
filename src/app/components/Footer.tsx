import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-900 py-2">
      <div className="container mx-auto px-4">
        
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} Vodafone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
