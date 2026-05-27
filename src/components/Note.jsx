import React from 'react';

export default function Note({ children }) {
  return (
    <div style={{ borderLeft: '4px solid #3b82f6', backgroundColor: '#eff6ff', borderRadius: '0 8px 8px 0', padding: '1rem', margin: '1rem 0' }}>
      <div style={{ fontSize: '0.875rem', color: '#1f2937' }}>{children}</div>
    </div>
  );
}
