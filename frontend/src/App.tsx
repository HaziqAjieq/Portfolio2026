import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Navbar from "./assets/component/ui/Navbar";

function App() {
  return (
    <Router>
      {/* navbar goes here */}
      <Navbar />
      <div className="flex justify-center z-0 ">
       
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        
      </div>
      {/* footer goes here */}
    </Router>
  );
}

export default App;

// main file to fetch all file and component
