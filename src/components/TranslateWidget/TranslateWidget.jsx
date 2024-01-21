import "./translateWidget.scss";
import { useState } from "react";
const TranslateWidget = () => {
  const buttons = [
    {
      id: 1,
      name: "English",
    },
    {
      id: 2,
      name: "French",
    },
  ];
  const [translate, setTranslate] = useState("English");
  const [text, setText] = useState("Hello How are you?");

  const handleApiCallForLanguageTranslation = () => {
    fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${translate}|fr`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTranslateLanguageChange = (e, language) => {
    setTranslate(language);
  };
  return (
    <div className="translated-widget">
      <div className="language-options">
        {buttons.map((button) => (
          <button className={`btn ${translate === button.name ? "selected-language" : ""}`} onClick={(e) => handleTranslateLanguageChange(e, button.name)} key={button.id}>
            {button.name}
          </button>
        ))}
      </div>
      <div className="language-input">
        <textarea value={text} name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <div className="language-footer">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleApiCallForLanguageTranslation();
          }}
        >
          Translate
        </button>
      </div>
    </div>
  );
};
export default TranslateWidget;
