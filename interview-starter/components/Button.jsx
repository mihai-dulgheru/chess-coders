import React from 'react';

const Button = ({ label }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="w-32 h-10 border-none rounded-md p-2 flex justify-center items-center text-lg bg-[#E63946] text-white hover:opacity-80 cursor-pointer"
        type="submit"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
