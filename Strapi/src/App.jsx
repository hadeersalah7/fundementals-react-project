import { useGlobalContext } from "./components/Context";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidbar from "./components/Sidbar";
import SubMenu from "./components/SubMenu";

const App = () => {
  return <main>
    <Navbar />
    <Hero />
    <Sidbar />
    <SubMenu />
  </main>;
};
export default App;
