import React from 'react';
import { Heading } from 'grommet';
import { ScheduleCards } from '../../components/Cards';
import { Layout } from '../../components/index';
import { CardGrid } from '../../components/Cards';
import eventSchedule from '../../ScheduleData/hpe-discover-events.json';

const Schedule = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Heading margin={{ bottom: 'none' }} color="text-strong">
        SCHEDULE
      </Heading>
      <Heading
        color="text"
        style={{ fontWeight: '500' }}
        margin={{ top: 'none', bottom: 'large' }}
        level={2}
      >
        WEEK OF JUNE 22
      </Heading>
      <CardGrid>
        {eventSchedule.map(
          ({
            id,
            session_id,
            session_type,
            avatar,
            title,
            presenter,
            desc,
            role,
            week,
            link,
          }) => (
            <ScheduleCards
              key={session_id}
              id={session_id}
              avatar={avatar}
              role={role}
              sessionType={session_type}
              title={title}
              presenter={presenter}
              desc={desc}
              link={link}
            />
          ),
        )}
      </CardGrid>
    </Layout>
  );
};

export default Schedule;
