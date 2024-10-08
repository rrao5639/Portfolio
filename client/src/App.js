import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Tech from "./pages/Tech";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./components/themeContext";
import AnimatedBackground from "./components/Background";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div className="background">
        <div id={theme}>
          <ToastContainer />
          <Layout />
          <AnimatedBackground />
          <div className="container">
            <About />
            <Education />
            <Tech />
            <Project />
            <Contact />
          </div>
          <Footer />
        </div>
        <ScrollToTop
          smooth
          color="white"
          style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        />
      </div>
    </>
  );
}

export default App;
