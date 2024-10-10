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
import { useState,useEffect } from "react";
import Loading from "./components/Loading";

function App() {
  const [theme] = useTheme();
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0); // State to track loading percentage

  useEffect(() => {
    const loadData = async () => {
      for (let i = 0; i <= 100; i++) {
        setPercentage(i);
        await new Promise(resolve => setTimeout(resolve, 50)); // Adjust time as needed
      }
      setLoading(false);
    };

    loadData();
  }, []);
  
  return (
    <>
      <div className="background">
        <div id={theme}>
          <ToastContainer />
          {loading ? ( // Conditional rendering based on loading state
            <Loading percentage={percentage} />
          ):(
            <>
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
          </>
          )}
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
