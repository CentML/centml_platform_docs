import React from 'react';
import Link from '@docusaurus/Link';
import { renderIcon } from '@site/src/icons';

export default function Card({ title, icon, href, children }) {
  const content = (
    <div className="ccluster-docs-card">
      {icon && (
        <span className="ccluster-docs-card__icon">
          {renderIcon(icon, { size: 20 })}
        </span>
      )}
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
