import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import CollectionsSection from "./components/ColletionSection";
import LivingBedroom from "./components/LivingBedroom"; // ✅ make sure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <CollectionsSection />
          </>
        } />
        <Route path="/living-bedroom" element={<LivingBedroom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
