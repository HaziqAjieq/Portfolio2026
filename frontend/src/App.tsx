import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Navbar from "./assets/component/ui/Navbar";
import Project from "./pages/homepage/component/Project";

function App() {
  return (
    <Router>
      {/* navbar goes here */}
      <Navbar />
      <div className="flex justify-middle items-center z-0 ">
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project/>}/>
          </Routes>
        
      </div>
      {/* footer goes here */}
    </Router>
  );
}

export default App;

// main file to fetch all file and component
