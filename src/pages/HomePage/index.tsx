"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import Footer from "@/components/Footer";
import GuessForm from "@/components/GuessForm";
import ThinkingAnimation from "@/components/ThinkingAnimation";
import jobs from "@/data/jobs";
import { getRandomTimeoutInSeconds } from "@/utils/utils";

const HomePage: React.FC = () => {
  const [guessedJob, setGuessedJob] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGuess = (name: string, surname: string) => {
    if (name === "" || surname === "") {
      toast.error("Please enter a name and surname!");
      return;
    }
    setIsLoading(true);
    // Simulate async API call
    setTimeout(() => {
      const randomJob = jobs[Math.floor(Math.random() * jobs.length)];
      setGuessedJob(randomJob);
      setIsLoading(false);
    }, getRandomTimeoutInSeconds());
  };

  const handleReset = () => {
    setGuessedJob(null);
  };

  return (
    <div>
      {isLoading ? (
        <ThinkingAnimation />
      ) : (
        <>
          {guessedJob ? (
            <>
              <p>
                You might be a<span className="font-bold"> {guessedJob}</span>!
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
              >
                Play Again
              </button>
            </>
          ) : (
            <GuessForm onGuess={handleGuess} />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
