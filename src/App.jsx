import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import './index.css';
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import CollectionsSection from "./components/ColletionSection";
import Footer from "./components/Footer";
import LivingBedroom from "./components/LivingBedroom"; // ✅ make sure this path is correct
import MasterBedroom from "./components/MasterBedroom";
import DiningKitchen from "./components/DiningKitchen";
import CommercialFurniture from "./components/CommercialFurniture";

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
        <Route path="/master-bedroom" element={<MasterBedroom />} />
        <Route path="/dining-kitchen" element={<DiningKitchen />} />
        <Route path="/commercial-furniture" element={<CommercialFurniture />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
