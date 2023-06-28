// socialMediaData.ts

export interface SocialMedia {
  name: string;
  link: string;
}

const socialMediaData: SocialMedia[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/ugurkiymetli",
  },
  {
    name: "GitHub",
    link: "https://github.com/ugurkiymetli",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ugurkiymetli/",
  },
  // Add more social media objects as needed
];

export const website:string = "http://ugurkiymetli.com/";
export default socialMediaData;
