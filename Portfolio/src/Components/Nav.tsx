import { FaFigma } from 'react-icons/fa';
import React from 'react';

const Nav: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <a href="#Larrie Moses" className="text-white text-lg no-underline">Larrie Moses</a>
                <a href="#Education" className="text-white text-lg no-underline">Education</a>
                <a href="#Experience" className="text-white text-lg no-underline">Experience</a>
                <FaFigma className="text-white text-lg" />
            </div>
        </nav>
    );
};

export default Nav;