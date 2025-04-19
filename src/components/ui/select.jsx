import React from 'react';

export const Select = ({ value, onValueChange, children }) => {
  return (
    <select value={value} onChange={(e) => onValueChange(e.target.value)} className="w-full p-3 border border-gray-300 rounded-md">
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectValue = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectContent = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
