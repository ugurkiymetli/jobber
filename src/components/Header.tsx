import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 px-8">
      <h1 className="text-white text-2xl font-bold">
        <Link href="/">Jobber</Link>
      </h1>
      <h6 className="text-white">Job Guessing Game</h6>
    </header>
  );
};

export default Header;
