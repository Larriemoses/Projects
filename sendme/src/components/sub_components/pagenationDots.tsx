// PaginationDots.tsx
import React from 'react';

interface PaginationDotsProps {
  currentIndex: number;
  total: number;
  onClick: (index: number) => void;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ currentIndex, total, onClick }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          onClick={() => onClick(index)}
          style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: index === currentIndex ? 'red' : 'lightgray',
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
