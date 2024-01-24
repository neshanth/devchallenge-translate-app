import "./translateWidget.scss";
import { BUTTONS } from "../../utils/constants";
const TranslateWidget = (props) => {
  const { language, handleLanguageChange, isTranslateOutput = false, text, handleTextChange, handleTranslateBtn } = props;
  // const handleCopyText = () => {
  //   navigator.clipboard.writeText(text);
  // };

  return (
    <div className={`translate-widget ${isTranslateOutput ? "translate-output" : ""}`}>
      <section className="header">
        {!isTranslateOutput && <p className="detect-language">Detect Language</p>}
        <div className="language-options">
          {BUTTONS.map((button) => (
            <button
              className={`btn ${language === button.name ? "selected-language" : ""}`}
              onClick={(e) => handleLanguageChange(e, button.name, isTranslateOutput ? "translated" : "translate")}
              key={button.id}
            >
              {button.name}
            </button>
          ))}
        </div>
        {isTranslateOutput && <button>Swticher</button>}
      </section>

      <div className="language-input">
        <textarea disabled={isTranslateOutput} value={text} name="language-input-textarea" id="" cols="30" rows="10" onChange={handleTextChange}></textarea>
      </div>
      <div className="language-footer">
        {/* <div className="copy">
          <button onClick={handleCopyText}>Copy</button>
        </div> */}
        {!isTranslateOutput && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleTranslateBtn();
            }}
          >
            Translate
          </button>
        )}
      </div>
    </div>
  );
};
export default TranslateWidget;
