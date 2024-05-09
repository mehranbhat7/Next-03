import React from "react";

const Footer = () => {
  return (
    <>
      <div className="md:h-[20rem] flex flex-col md:flex-row justify-evenly items-center md:items-start md:text-left md:space-x-10">
        <div className="mb-5 md:mb-0">
          <h1 className="text-2xl mb-4">Follow Me On</h1>
          <ul className="text-2md">
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="mb-5 md:mb-0">
          <h1 className="text-2xl mb-4">Quick links</h1>
          <ul className="text-2md">
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl mb-4">Contact Us</h1>
          <ul className="text-2md">
            <li>London UK</li>
            <li>J&K, 190002</li>
            <li>Email: mehranbhat2001@gmail.com</li>
            <li>Phone: (+91) 6005046534</li>
          </ul>
        </div>
      </div>
      <h4 className="mt-5 md:mt-10 text-center">
        © Copyright. All rights reserved
      </h4>
    </>
  );
};

export default Footer;
