import { handleApiCallForLanguageTranslation } from "../../utils/utils";
import TranslateWidget from "../TranslateWidget/TranslateWidget";
import { useState } from "react";

const Translate = () => {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("Hello,How are you?");
  const [translatedLanguage, setTranslatedLanguage] = useState("French");
  const [translatedText, setTranslatedText] = useState("Bonjour, comment allez-vous");

  const handleTranslateBtn = () => {
    const languages = {
      translate: language,
      translated: translatedLanguage,
    };
    handleApiCallForLanguageTranslation(text, languages)
      .then((data) => {
        setTranslatedText(data.responseData.translatedText);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLanguageChange = (e, name, type) => {
    e.preventDefault();
    type === "translate" ? setLanguage(name) : setTranslatedLanguage(name);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <TranslateWidget handleTranslateBtn={handleTranslateBtn} language={language} handleTextChange={handleTextChange} text={text} handleLanguageChange={handleLanguageChange} />
      <TranslateWidget isTranslateOutput={true} language={translatedLanguage} handleLanguageChange={handleLanguageChange} text={translatedText} />
    </>
  );
};
export default Translate;
