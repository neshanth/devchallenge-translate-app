import Logo from "./components/Logo/Logo";
import Language from "./components/Language/Language";

const App = () => {
  return (
    <>
      <Logo />
      <main className="main">
        <Language />
        <Language />
      </main>
    </>
  );
};
export default App;
