import React from 'react';
import Link from '@docusaurus/Link';

export default function Banner() {
  return (
    <div className="ccluster-docs-banner">
      <p className="ccluster-docs-banner__title">A Quickstart Guide</p>
      <p className="ccluster-docs-banner__desc">
        The first steps to help you get started with the NVIDIA CCluster.
      </p>
      <Link to="/home/quickstart" className="ccluster-docs-banner__cta">
        Get Started
      </Link>
    </div>
  );
}
