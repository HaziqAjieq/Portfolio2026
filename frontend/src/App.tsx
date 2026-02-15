import "./index.css";
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Home from "./pages/homepage/Home";
import Navbar from "./assets/component/ui/Navbar";

function App() {
  return (
    <Router>
      {/* navbar goes here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      {/* footer goes here */}
    </Router>


  )
  
  ;
}

export default App;

// main file to fetch all file and component
