"use client";
import React from "react";

import socialMediaData, { SocialMedia } from "@/data/socialMediaLinks";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-1 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Made with 🧡 by Uğur.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            {socialMediaData.map((socialMedia: SocialMedia) => (
              <li key={socialMedia.name}>
                <a
                  href={socialMedia.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {socialMedia.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
