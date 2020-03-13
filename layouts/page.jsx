import React from 'react';

import { Footer, PreFooter, Header, Meta } from '../components';

import './fonts.scss';
import './pageStyles.scss';

const Page = ({
  title,
  description,
  headerKey,
  usePreFooter = true,
  preFooterBackground,
  children,
}) => (
  <div id="page-layout">
    <Meta title={title} description={description} />
    <Header headerKey={headerKey || 'home'} />
    <main>
      {children}
      {usePreFooter && <PreFooter background={preFooterBackground} />}
    </main>
    <Footer />
  </div>
);

export default Page;
