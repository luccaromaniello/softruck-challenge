"use client";
import Image from "next/image";

const Instructions = () => {
  return (
    <div className="instructions-content">
      <div>
        <div className="image-container">
          <Image
            src="/softruck_logo.png"
            alt="Softruck logo"
            className="image"
            width={160}
            height={80}
            sizes="100%"
            priority
          />
        </div>
        <h1>Softruck Code Challenge</h1>
        <p className="text-secondary">
          The map animation is related to a Softruck coding challenge. Is is not
          looped, so you want to see it again you should update the page.
          <br /> <br />
          You can read the instructions in the main repository.
        </p>
        <div className="contact-container">
          <span>
            <a
              href="https://github.com/luccaromaniello/softruck-challenge"
              target="_blank"
              className="link"
            >
              GitHub Repository
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/luccaromaniello/"
              target="_blank"
              className="link"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <p className="text-tertiary">Designed and built by Lucca Romaniello</p>
    </div>
  );
};

export default Instructions;
