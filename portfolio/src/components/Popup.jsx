import React, { useState, useEffect } from 'react';

const Popup = () => {
  const text = " Er.Vishnu singh ";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 200);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, 1000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index, displayedText]);

  return (
    
      <div className="">{displayedText}</div>
    
  );
};

export default Popup;
