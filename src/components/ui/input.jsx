import React from 'react';

export const Input = ({ type, name, value, onChange, placeholder, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-md"
    />
  );
};
