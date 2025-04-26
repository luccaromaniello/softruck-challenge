"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Instructions = () => {
  const text = useTranslations("Home");
  const { push } = useRouter();
  const path = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [languageChanged, setLanguageChanged] = useState(false);

  useEffect(() => {
    const currentLanguage = path.split("/")[1];
    if (currentLanguage && currentLanguage !== selectedLanguage) {
      setSelectedLanguage(currentLanguage);
    }
  }, [path, selectedLanguage]);

  useEffect(() => {
    if (languageChanged) {
      const currentPath = path.split("/").slice(2).join("/");
      push(`/${selectedLanguage}/${currentPath}`);
      setLanguageChanged(false);
    }
  }, [languageChanged, selectedLanguage, path, push]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    setLanguageChanged(true);
  };

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
      <select onChange={handleLanguageChange} value={selectedLanguage}>
        <option value="en">EN</option>
        <option value="pt-br">PT-BR</option>
      </select>
    </div>
  );
};

export default Instructions;
