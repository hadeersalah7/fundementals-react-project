import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ToggleTheme from "./components/ToggleTheme";

const App = () => {
  return (
    <main>
    <ToggleTheme />
    <SearchForm />
    <Gallery />
  </main>
  )
};
export default App;
