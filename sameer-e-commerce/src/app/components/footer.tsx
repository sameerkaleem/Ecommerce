import React from "react";

const Footer = () => {
  return <footer className="bg-gray-50 py-10 text-gray-600">
          {/* Top Section */}
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
            {/* Address */}
            <div className="mb-6 md:mb-0 md:w-1/3">
              <p className="text-gray-500">
                400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
              </p>
            </div>
    
            {/* Links */}
            <div className="flex justify-between md:w-2/3">
              {/* Links Section */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-400">Links</h3>
                <ul className="space-y-1 text-black">
                  <li>Home</li>
                  <li>Shop</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
    
              {/* Help Section */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-400">Help</h3>
                <ul className="space-y-1 text-black">
                  <li>Payment Options</li>
                  <li>Returns</li>
                  <li>Privacy Policies</li>
                </ul>
              </div>
    
              {/* Newsletter */}
              <div>
                <h3 className="font-semibold mb-2 text-gray-400">Newsletter</h3>
                <div className="flex border-b border-black pb-1">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="bg-transparent focus:outline-none w-full"
                  />
                  <button className="ml-2 font-semibold text-black">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
    
          {/* Bottom Section */}
          <div className="mt-10 border-t border-gray-300">
            <p className="ml-1 text-gray-950 py-4">
              2024 Meubel House SAMEER. All rights reserved
            </p>
          </div>
        </footer>
    
};

export default Footer;



