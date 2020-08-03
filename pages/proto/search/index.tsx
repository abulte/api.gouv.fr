import React from 'react';

import ProtoSearchBar from '../components/protoSearchBar';
import Page from '../layouts';

const About: React.FC = () => {
  return (
    <Page>
      <div className="centered-search">
        <h1>Répertoire des personnes morales</h1>
        <h2>
          Retrouvez toutes les informations publiques concernant les entreprises
          et associations de France
        </h2>
        <div className="layout-center">
          <ProtoSearchBar />
        </div>
      </div>
      <style jsx>{`
        h1,
        h2 {
          text-align: center;
        }
        h1 {
          font-size: 3rem;
        }

        .centered-search {
          padding-bottom: 200px;
        }
      `}</style>
    </Page>
  );
};

export default About;
