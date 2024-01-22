import "./translateWidget.scss";
import { BUTTONS } from "../../utils/constants";
const TranslateWidget = (props) => {
  const { language, handleLanguageChange, isTranslateOutput = false } = props;
  // const handleCopyText = () => {
  //   navigator.clipboard.writeText(text);
  // };

  return (
    <div className="translate-widget">
      <section className="header">
        {!isTranslateOutput && <p>Detect Language</p>}
        <div className="language-options">
          {BUTTONS.map((button) => (
            <button className={`btn ${language === button.name ? "selected-language" : ""}`} onClick={(e) => handleLanguageChange(e, button.name)} key={button.id}>
              {button.name}
            </button>
          ))}
        </div>
        {isTranslateOutput && <button>Swticher</button>}
      </section>

      {/* <div className="language-input">
        <textarea value={text} name="" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <div className="language-footer">
        <div className="copy">
          <button onClick={handleCopyText}>Copy</button>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleApiCallForLanguageTranslation();
          }}
        >
          Translate
        </button>
      </div> */}
    </div>
  );
};
export default TranslateWidget;
