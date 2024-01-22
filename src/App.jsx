import Logo from "./components/Logo/Logo";
import Translate from "./components/Translate/Translate";
import TranslateOutput from "./components/TranslateOutput/TranslateOutput";
import TranslateWidget from "./components/TranslateWidget/TranslateWidget";

const App = () => {
  return (
    <>
      <header className="header-logo">
        <Logo />
      </header>
      <main className="main">
        <Translate />
        <TranslateOutput />
      </main>
    </>
  );
};
export default App;
