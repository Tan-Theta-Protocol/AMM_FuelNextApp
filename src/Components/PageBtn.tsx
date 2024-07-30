import React from 'react';

interface PageButtonProps {
  name: string;
  isBold?: boolean;
  to?: string;
}

const PageButton: React.FC<PageButtonProps> = ({ name, isBold = false, to = '#' }) => {
  return (
  
      <button className={`pageBtn ${isBold ? 'bold' : ''}`}>
        {name}
      </button>

  );
};

export default PageButton;
