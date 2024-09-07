import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Work from "./components/Works/work";
import ContactMe from "./components/Contact/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
