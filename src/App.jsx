import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Research from "./components/Research";
import Footer from "./components/Footer";
import Lab from "./components/Lab";
import Teaching from "./components/Teaching";
import Resume from "./components/Resume";
import PublicationsPage from "./components/PublicationsPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/MID-lab" element={<Lab />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/publications" element={<PublicationsPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
