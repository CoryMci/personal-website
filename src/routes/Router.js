import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.js";

export default function Router() {
  return (
    <BrowserRouter basename="https://corymci.github.io/personal-website/">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
