import About from "../components/About";
import Header from "../components/Header";
import Welcome from "../components/Welcome";

export default function App() {
  return (
    <div className="max-w-6xl m-auto">
      <Header />
      <Welcome />
      <About />
    </div>
  );
}
