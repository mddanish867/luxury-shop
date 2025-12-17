import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl font-black mb-6 italic">VOID.</h2>
            <p className="text-gray-400 max-w-sm">
              Defining the future of minimalist aesthetic through architectural
              garments and sustainable practices.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-xs tracking-widest">LINKS</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Shipping Policy
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Sustainability
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-xs tracking-widest">
              NEWSLETTER
            </h5>
            <div className="flex border-b border-white/20 pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-sm w-full"
              />
              <button className="text-xs font-bold">JOIN</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
