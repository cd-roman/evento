import H1 from "@/components/H1";
import { capitalize } from "@/lib/utils";
import EventsList from "@/components/events-list";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";

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

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = Number(searchParams.page) || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">Events in {capitalize(city)}</H1>

      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
