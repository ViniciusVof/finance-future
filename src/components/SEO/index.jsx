import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const MAIN_KEYWORDS = '';

const DEFAULT_TITLE = `${process.env.REACT_APP_NAME_APP}`;
const DEFAULT_DESCRIPTION = `${process.env.REACT_APP_NAME_APP}`;

const POSTFIX_TITLE = ` | ${process.env.REACT_APP_NAME_APP}`;

export function SEO({
  title,
  description,
  keywords,
  largeTwitterCard,
  addPostfixTitle,
  noIndex,
  children = null,
}) {
  let metaTitle;

  if (addPostfixTitle) {
    metaTitle = title + POSTFIX_TITLE;
  } else {
    metaTitle = title;
  }

  const metaDesc = description ?? DEFAULT_DESCRIPTION;

  const metaKeywords = keywords.length
    ? `${MAIN_KEYWORDS}, ${keywords}`
    : MAIN_KEYWORDS;

  const metaRobots = noIndex ? 'noindex, nofollow' : 'index, follow';

  const twitterCardType = largeTwitterCard ? 'summary_large_image' : 'summary';

  return (
    <Helmet>
      <html lang="pt-br" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={metaRobots} />

      <meta property="og:title" title={metaTitle} />
      <meta property="og:description" title={metaDesc} />
      <meta property="og:type" content="..." />

      <meta property="twitter:title" title={metaTitle} />
      <meta property="twitter:description" title={metaDesc} />
      <meta property="twitter:card" content={twitterCardType} />

      <meta name="referrer" content="origin-when-crossorigin" />

      {children}
    </Helmet>
  );
}

SEO.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  largeTwitterCard: false,
  addPostfixTitle: true,
  noIndex: false,
  children: null,
  keywords: '',
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  largeTwitterCard: PropTypes.bool,
  addPostfixTitle: PropTypes.bool,
  noIndex: PropTypes.bool,
  children: PropTypes.node,
};
