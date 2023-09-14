import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

export default function HomePage(props) {
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 1800
  }
}