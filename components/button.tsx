import React from 'react';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="bg-gray-700 hover:bg-gray-500 text-white text-3xl font-bold py-4 px-6 rounded-full flex-1"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
