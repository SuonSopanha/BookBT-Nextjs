"use client";

import { useState } from 'react';
const Counter = () => {
  // No need for `useState` here as state is passed as props
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <p>{isClicked ? 'Clicked' : 'Not clicked'}</p>
      <button type="button" onClick={()=>handleClick()}>Click me</button>
    </div>
  );
};

export default Counter;
