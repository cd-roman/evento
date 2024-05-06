import H1 from "@/components/h1";
import { capitalize, getEvents } from "@/lib/utils";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  const { events } = await getEvents(city, parsedPage.data);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28 text-center">Events in {capitalize(city)}</H1>

      <Suspense key={city + parsedPage.data} fallback={<Loading />}>
        {events.length > 0 ? (
          <EventsList city={city} page={parsedPage.data} />
        ) : (
          `Sorry, there are no events in ${capitalize(city)} at the moment`
        )}
      </Suspense>
    </main>
  );
}
