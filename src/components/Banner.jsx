import React from 'react';
import Link from '@docusaurus/Link';

export default function Banner() {
  return (
    <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.5rem', margin: '1rem 0' }}>
      <p style={{ color: '#111827', fontSize: '1.125rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
        A Quickstart Guide
      </p>
      <p style={{ color: '#4b5563', fontSize: '0.875rem', margin: '0 0 1rem 0' }}>
        The first steps to help you get started with the NVIDIA CCluster.
      </p>
      <Link
        to="/home/quickstart"
        style={{ display: 'inline-block', backgroundColor: '#76b900', color: '#ffffff', fontSize: '0.875rem', fontWeight: 500, padding: '0.5rem 1rem', borderRadius: '6px', textDecoration: 'none' }}
      >
        Get Started
      </Link>
    </div>
  );
}
