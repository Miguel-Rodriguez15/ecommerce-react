import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import "./BurguerButton.css"

function BurguerBotton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="hamburger-button" onClick={handleToggle}>
    {isOpen ? <FaTimes /> : <FaBars />}
  </button>

  )
}

export default BurguerBotton