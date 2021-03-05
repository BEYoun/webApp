import React from 'react'

interface LoginButtonProps {

}

const LoginButton: React.FC<LoginButtonProps> = ({ }) => {
    return (
        <button className="bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            Login
        </button>
    );
}

export default LoginButton;