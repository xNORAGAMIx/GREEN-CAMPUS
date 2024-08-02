import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [isOpen,setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Routes>
        <Route path="/" element={<Home isOpen={isOpen} setIsOpen={setIsOpen}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
