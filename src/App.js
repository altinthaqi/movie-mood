import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme/theme";
import Header from "./components/header/Header";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import Footer from "./components/footer/Footer";
import The404Component from "./pages/404/The404Component";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Header themeToggler={themeToggler} theme={theme} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<The404Component />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
