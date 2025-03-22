import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
{/* components */}
import Home from "./pages/Home";
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
