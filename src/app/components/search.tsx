import React, { useState } from 'react';
import { Input } from 'antd';
import { FaMagnifyingGlass } from "react-icons/fa6";

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const Search: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid black', 
    transition: 'border-color 0.3s',
    ...(isFocused && {
      borderBottomColor: 'black', 
      boxShadow: '0 0 0 2px white',
    }),
  };

  return (
    <Input
      placeholder="세션 검색"
      allowClear
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={inputStyle}
      suffix={<FaMagnifyingGlass />}
    />
  );
};

export default Search;
