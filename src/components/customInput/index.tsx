import React, { FC } from 'react';
import { InputProps } from './CustomInput';

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
