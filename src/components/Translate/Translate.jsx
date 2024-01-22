import TranslateWidget from "../TranslateWidget/TranslateWidget";
import { useState } from "react";

const Translate = () => {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("Hello,How are you?");

  const handleLanguageChange = (e, name) => {
    e.preventDefault();
    setLanguage(name);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return <TranslateWidget language={language} handleTextChange={handleTextChange} text={text} handleLanguageChange={handleLanguageChange} />;
};
export default Translate;
