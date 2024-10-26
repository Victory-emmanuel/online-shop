import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterSection from "./components/Universal/FooterSection";
import NavBar from "./components/Universal/NavBar";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ThemeToggle from "./components/Universal/ThemeToggle";

function App() {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="app bg-primary dark:bg-secondary text-secondary dark:text-primary transition-colors duration-1000">
      <BrowserRouter>
        <NavBar>
          <ThemeToggle />
        </NavBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
