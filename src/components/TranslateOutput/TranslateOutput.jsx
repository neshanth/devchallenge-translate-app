import TranslateWidget from "../TranslateWidget/TranslateWidget";
import { useState } from "react";

const TranslateOutput = ({ translatedOutputText }) => {
  const [language, setLanguage] = useState("English");
  const handleLanguageChange = (e, name) => {
    e.preventDefault();
    setLanguage(name);
  };

  return <TranslateWidget language={language} text={translatedOutputText} handleLanguageChange={handleLanguageChange} isTranslateOutput={true} />;
};
export default TranslateOutput;
