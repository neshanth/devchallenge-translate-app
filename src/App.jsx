import Logo from "./components/Logo/Logo";
import Translate from "./components/Translate/Translate";
import TranslateOutput from "./components/TranslateOutput/TranslateOutput";
import TranslateWidget from "./components/TranslateWidget/TranslateWidget";
import { useState } from "react";

const App = () => {
  const [translatedOutputText, setTranslatedOutputText] = useState("Bonjour, comment allez-vous");
  return (
    <>
      <header className="header-logo">
        <Logo />
      </header>
      <main className="main">
        <Translate />
        <TranslateOutput translatedOutputText={translatedOutputText} />
      </main>
    </>
  );
};
export default App;
