import React from "react";

const Footer = () => {
  return (
    <footer className="mt-18 pt-7 text-base flex justify-between">
      <div>
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
          href="https://twitter.com/RukhsarMan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        &bull;{" "}
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
          href="https://github.com/Rukhsar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{" "}
      </div>
      <div>
        <a
          className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none justify-self-end"
          href="https://rukhsar.dev/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
