import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Welcome from "../components/Welcome";

export default function App() {
  return (
    <div id="home" className="max-w-6xl m-auto">
      <Header />
      <Welcome />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
