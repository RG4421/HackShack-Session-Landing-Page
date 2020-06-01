import React from 'react';
import { ContentCards } from '../../components/Cards';
import { Layout } from '../../components/index';
import { CardGrid } from '../../components/Cards';
import { communityContent } from '../../data/PageContent';

const Community = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <CardGrid>
        {communityContent.map(content => (
          <ContentCards
            key={content.title}
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

export default Community;
