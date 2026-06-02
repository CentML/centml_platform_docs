import React from 'react';
import Link from '@docusaurus/Link';

export default function HeroCard({ img, title, description, href }) {
  const content = (
    <div className="ccluster-docs-hero-card">
      <img src={img} alt={title} className="ccluster-docs-hero-card__img" />
      <div className="ccluster-docs-hero-card__body">
        <p className="ccluster-docs-card__title">{title}</p>
        {description && <p className="ccluster-docs-card__desc">{description}</p>}
      </div>
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
