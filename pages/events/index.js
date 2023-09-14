import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '@/helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
