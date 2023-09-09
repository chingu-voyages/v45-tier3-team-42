// src/components/Footer.tsx
import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-black py-4  w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    EcoBagain GmbH © 2023 All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-800 hover:text-gray-400">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-400">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-400">
                        <FaGithub />
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-400">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
