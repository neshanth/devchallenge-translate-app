import Logo from "./components/Logo/Logo";
import TranslateWidget from "./components/TranslateWidget/TranslateWidget";

const App = () => {
  return (
    <>
      <header className="header-logo">
        <Logo />
      </header>
      <main className="main">
        <TranslateWidget />
      </main>
    </>
  );
};
export default App;
