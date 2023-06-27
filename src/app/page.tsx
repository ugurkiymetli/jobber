import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gray-800 py-4 px-8">
          <h1 className="text-white text-2xl font-bold">Job Guessing Game</h1>
        </header>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <HomePage />
        </main>
      </div>
    </>
  );
}
