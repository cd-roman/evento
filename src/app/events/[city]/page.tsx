import { EventoEvent } from "@/src/lib/types";
import H1 from "../../../components/H1";
import { capitalize } from "../../../lib/utils";

type Props = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: Props) {
  const city = params.city;

  const response = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=austin"
  );
  const events: EventoEvent[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1>{capitalize(city)}</H1>

      {events.map((event) => (
        <section key={event.id}>{event.name}</section>
      ))}
    </main>
  );
}
