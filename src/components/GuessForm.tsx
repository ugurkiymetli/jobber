import { useState } from "react";

interface GuessFormProps {
  onGuess: (name: string, surname: string) => void;
}

const GuessForm: React.FC<GuessFormProps> = ({ onGuess }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuess(name, surname);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
    >
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <input
        type="text"
        placeholder="Enter your surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Guess
      </button>
    </form>
  );
};

export default GuessForm;
