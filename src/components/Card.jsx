import React from 'react';
import Link from '@docusaurus/Link';

export default function Card({ title, icon, href, children }) {
  const content = (
    <div className="ccluster-docs-card">
      <p className="ccluster-docs-card__title">{title}</p>
      {children && <p className="ccluster-docs-card__desc">{children}</p>}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="ccluster-docs-card__link">
        {content}
      </Link>
    );
  }

  return content;
}
