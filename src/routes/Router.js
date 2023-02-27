import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
