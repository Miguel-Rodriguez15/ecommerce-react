import React, { useState } from 'react';
import "./assets/searchButton.css"

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setIsInputEmpty(event.target.value === '');
  };

  const handleReset = () => {
    setIsInputEmpty(true);
  };

  return (
    <form className={`search-box ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={isInputEmpty ? '' : undefined}
      />
      <button type="reset" onClick={handleReset}></button>
    </form>
  );
};

export default SearchBox;
