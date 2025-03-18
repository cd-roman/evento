import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-100 mb-2">404</h1>
        <p className="text-xl text-gray-500">This page is not found</p>
        <Link href="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
