import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <div className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        <Link href="/">Go Back to Main Page</Link>
      </div>
    </div>
  );
}
