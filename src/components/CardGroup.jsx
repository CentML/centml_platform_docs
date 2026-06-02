import React from 'react';

export default function CardGroup({ cols = 2, children }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: '1rem',
        margin: '1rem 0',
      }}
    >
      {children}
    </div>
  );
}
