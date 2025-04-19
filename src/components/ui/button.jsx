import React from 'react';

export const Button = ({ type, children, className }) => {
  return (
    <button type={type} className={`${className} p-3 bg-blue-500 text-white rounded-md`}>
      {children}
    </button>
  );
};
