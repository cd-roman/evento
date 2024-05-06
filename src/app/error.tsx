"use client";

import H1 from "@/components/h1";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="text-center py-24">
      <H1>{error.message}</H1>
      <button
        className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
