import React from "react";

const Navbar = ({setshowRules, showStartGame}) => {
    return (
        <nav className="bg-black text-white p-3 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Title */}
                <div className="text-2xl font-bold cursor-pointer">
                    🎲 Dice Game
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6">
                <a onClick={() => {showStartGame()}} href="#" className="hover:text-gray-400">Home</a>
                <a onClick={()=>setshowRules((prev)=>!prev)} href="#" className="hover:text-gray-400">Rules</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
