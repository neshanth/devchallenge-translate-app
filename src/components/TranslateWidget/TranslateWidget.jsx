import "./translateWidget.scss";
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
  return (
    <div className="translated-widget">
      <div className="language-options">
        {buttons.map((button) => (
          <button key={button.id}>{button.name}</button>
        ))}
      </div>
      <div className="language-input">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="language-footer">
        <button>Translate</button>
      </div>
    </div>
  );
};
export default TranslateWidget;
