"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import GuessForm from "@/components/GuessForm";
import ThinkingAnimation from "@/components/ThinkingAnimation";
import jobs from "@/data/jobs";
import { getRandomTimeoutInSeconds } from "@/utils/utils";

const Game = () => {
  const [guessedJob, setGuessedJob] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDiv, setShowDiv] = useState(true);

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
  const descrtiptionText = `Guess your future job by entering your name and surname, and click the
    "Guess" button. We will show you a "thinking" animation and randomly
    select a job from our list. Good luck and have fun!`;

  const handleClose = () => {
    setShowDiv(false);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex min-h-screen flex-col items-center p-24">
        {isLoading ? (
          <ThinkingAnimation />
        ) : (
          <>
            {guessedJob ? (
              <>
                <p>
                  You might be a<span className="font-bold"> {guessedJob}</span>
                  !
                </p>
                <button
                  onClick={() => setGuessedJob(null)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                >
                  Play Again
                </button>
              </>
            ) : (
              <>
                {showDiv ? (
                  <div className="flex justify-center items-center">
                    <div className="max-w-md w-full sm:w-auto bg-white rounded-lg m-4 p-6 shadow-lg relative">
                      <button
                        className="bg-gray-600 rounded-lg absolute top-0 right-0 m-1 p-2 w-6 h-6 flex items-center justify-center"
                        onClick={handleClose}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-full w-full transform scale-150"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                      <p className="text-base italic text-base text-black mb-1">
                        How to play?
                      </p>
                      <p className="text-sm text-black">{descrtiptionText}</p>
                    </div>
                  </div>
                ) : null}
                <GuessForm onGuess={handleGuess} />
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Game;
