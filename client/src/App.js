import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Create from "./components/Create";
import Update from "./components/Update";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Read />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/create" element={<Create />} />
       
      </Routes>

  
    </div>
  );
}

export default App;
