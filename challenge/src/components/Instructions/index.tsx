"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Instructions = () => {
  const text = useTranslations("Home");

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
        <h1>{text("heading")}</h1>
        <p className="text-secondary">
          {text("description")}
          <br /> <br />
          {text("instructions")}
        </p>
        <div className="contact-container">
          <span>
            <a
              href="https://github.com/luccaromaniello/softruck-challenge"
              target="_blank"
              className="link"
            >
              {text("githubRepo")}
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
      <p className="text-tertiary">{text("footer")}</p>
    </div>
  );
};

export default Instructions;
