import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import The404Component from "./pages/404/The404Component";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Movies from "./pages/Movies";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme/theme";
import Footer from "./components/footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");

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
