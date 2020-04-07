import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import prune from 'underscore.string/prune';
import { NextSeo } from 'next-seo';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const SITE_NAME = publicRuntimeConfig.SITE_NAME || 'api.gouv.fr';
const SITE_URL = publicRuntimeConfig.SITE_URL || 'https://api.gouv.fr';
const SITE_DESCRIPTION =
  'Simplifiez le partage et la circulation des données administratives';

const Meta = ({ title, description }) => {
  description = prune(description, 160, '…');
  return (
    <>
      <NextSeo
        title={title || SITE_NAME}
        description={description || SITE_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          locale: 'fr_FR',
          title: title || SITE_NAME,
          description: description || SITE_DESCRIPTION,
          images: [
            {
              url: '/images/linkedin.jpg',
              width: 1200,
              height: 627,
              alt: 'api.gouv.fr',
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Head>
        <title>
          {title ? title + ' - ' : ''}
          {SITE_NAME}
        </title>

        {/* Search Engine */}
        <meta name="description" content={description || SITE_DESCRIPTION} />
        <meta name="image" content="/images/api.gouv.fr.svg" />

        {/* Schema.org for Google */}
        <meta itemProp="name" content={title || SITE_NAME} />
        <meta
          itemProp="description"
          content={description || SITE_DESCRIPTION}
        />
      </Head>
    </>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Meta.defaultProps = {
  title: null,
  description: null,
};

export default Meta;
