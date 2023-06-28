import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <HomePage />
        </main>
        <Footer />
      </div>
    </>
  );
}
