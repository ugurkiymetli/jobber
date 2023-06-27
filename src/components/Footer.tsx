import socialMediaData, { SocialMedia } from "@/data/socialMediaLinks";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-4 px-8">
      <div className="flex flex-wrap justify-center">
        {socialMediaData.map((socialMedia: SocialMedia) => (
          <a
            key={socialMedia.name}
            href={socialMedia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mx-4 my-2"
          >
            {socialMedia.name}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
