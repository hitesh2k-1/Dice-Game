import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-3 mt-10 sticky">
            <div className="container m-auto flex flex-col md:flex-row justify-between items-center">
                {/* Logo or Title */}
                <div className="text-xl font-bold mb-4 md:mb-0 mx-2 ">
                    🎲 Dice Game
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6 mb-4 md:mb-0 mx-2 ">
                    <a href="#" className="hover:text-gray-400">About</a>
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Contact Us</a>
                </div>

               
            </div>

            {/* Copyright */}
            <div className="mt-2 text-center text-sm text-gray-500">
                © 2024 Dice Game. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
