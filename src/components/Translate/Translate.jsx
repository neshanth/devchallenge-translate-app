import { handleApiCallForLanguageTranslation } from "../../utils/utils";
import TranslateWidget from "../TranslateWidget/TranslateWidget";
import { useState } from "react";
import { TEXT_LIMIT, LANGUAGESHORTNAME } from "../../utils/constants";

const Translate = () => {
  const [language, setLanguage] = useState("English");
  const [text, setText] = useState("Hello,How are you?");
  const [translatedLanguage, setTranslatedLanguage] = useState("French");
  const [translatedText, setTranslatedText] = useState("Bonjour, comment allez-vous");

  const handleTranslateBtn = () => {
    const languages = {
      translate: LANGUAGESHORTNAME[language],
      translated: LANGUAGESHORTNAME[translatedLanguage],
    };
    handleApiCallForLanguageTranslation(text, languages)
      .then((data) => {
        setTranslatedText(data.responseData.translatedText);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSwitcherBtn = () => {
    const temp = language;
    setLanguage(translatedLanguage);
    setTranslatedLanguage(temp);
  };

  const handleLanguageChange = (e, name, type) => {
    e.preventDefault();
    type === "translate" ? setLanguage(name) : setTranslatedLanguage(name);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value.substr(0, TEXT_LIMIT);
    setText(newText);
  };

  return (
    <>
      <TranslateWidget handleTranslateBtn={handleTranslateBtn} language={language} handleTextChange={handleTextChange} text={text} handleLanguageChange={handleLanguageChange} />
      <TranslateWidget handleSwitcherBtn={handleSwitcherBtn} isTranslateOutput={true} language={translatedLanguage} handleLanguageChange={handleLanguageChange} text={translatedText} />
    </>
  );
};
export default Translate;
