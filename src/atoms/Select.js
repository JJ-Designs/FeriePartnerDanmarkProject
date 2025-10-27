import React from 'react';

function Select({
  value = '',
  onChange,
  options = [],
  placeholder = 'Select an option...',
  disabled = false,
  className = ''
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-4 py-2 text-lg bg-white border border-slate-300 rounded-lg shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-grey focus:border-grey 
        disabled:opacity-50 disabled:bg-slate-50 ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Select;