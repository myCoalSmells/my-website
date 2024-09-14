import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import MySkills from "./scenes/MySkills";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Blogs from "./scenes/Blogs";
import { Routes, Route } from "react-router-dom";
import { getActiveSection } from "./utils/activeSection";
import BlogPost from "./scenes/BlogPost";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
        const activeSection = getActiveSection();
        setSelectedPage(activeSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/"
          element={
            <>
              <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <div className="w-5/6 mx-auto md:h-full">
                {isAboveMediumScreens && (
                  <DotGroup
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                )}
                <Landing setSelectedPage={setSelectedPage} />
              </div>
              <LineGradient />
              <div className="w-5/6 mx-auto md:h-full">
                <MySkills />
              </div>

              <div className="py-10">
                <LineGradient />
              </div>
              <div className="w-5/6 mx-auto md:h-full">
                <Projects />
              </div>
              <LineGradient />
              <div className="w-5/6 mx-auto md:h-full">
                <Blogs />
              </div>
              <LineGradient />
              <div className="w-5/6 mx-auto md:h-full">
                <Contact />
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
