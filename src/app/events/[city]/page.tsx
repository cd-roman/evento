import { EventoEvent } from "@/lib/types";
import H1 from "@/components/H1";
import { capitalize } from "@/lib/utils";
import EventsList from "@/components/events-list";

type Props = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: Props) {
  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: EventoEvent[] = await response.json();

  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{capitalize(city)}</H1>

      <EventsList events={events} />
    </main>
  );
}
