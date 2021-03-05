import React from 'react'

interface LinkProps {
    text: string;
    active: boolean;
    type: 'mobile' | 'normal';
}

const Link: React.FC<LinkProps> = ({ text, active, type }) => {
    const design = ((active ? "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md font-medium") + (type === 'mobile' ? "text-base" : "text-sm"))
    return (
        <a href="#" className={design} >
            {text}
        </a>
    );
}

export default Link;