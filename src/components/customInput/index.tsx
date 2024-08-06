import React, { FC, ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
}

const Input: FC<InputProps> = ({ value, onChange, placeholder, className, type = "text", ...rest }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  );
};

export default Input;
