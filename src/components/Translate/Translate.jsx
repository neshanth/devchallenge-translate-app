import TranslateWidget from "../TranslateWidget/TranslateWidget";
import { useState } from "react";

const Translate = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e, name) => {
    e.preventDefault();
    setLanguage(name);
  };

  return <TranslateWidget language={language} handleLanguageChange={handleLanguageChange} />;
};
export default Translate;
