import React from 'react';
import { ContentCards } from '../../components/Cards';
import { Layout } from '../../components/index';
import { CardGrid } from '../../components/Cards';
import { arcadeContent } from '../../CardData/PageContent';

const Arcade = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <CardGrid>
        {arcadeContent.map(content => (
          <ContentCards
            title={content.title}
            image={content.image}
            desc={content.desc}
            label={content.label}
            link={content.link}
          />
        ))}
      </CardGrid>
    </Layout>
  );
};

export default Arcade;
