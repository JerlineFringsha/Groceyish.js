import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeroCards from "./components/section3/HeroCards";
import DailyBest from "./components/section3/DailyBest";
import Second from "./pages/Second";
import Featured from "./pages/Featured";
import DailyDeals  from "./pages/DailyDeals";
//Groceyish/src/pages/DailyDeals.jsx
import NotFound from "./pages/NotFound";
import Installment from "./components/section4/Installment";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* section1 */}    
        <Topbar/>
        <Navbar/>    
        
        <Routes>          
          <Route index element={<Home />} />      
          <Route path="/featured" element={<Featured />} />
          <Route path="/daily" element={<DailyDeals />} />
          <Route path="/second" element={<Second />} />                
          <Route path="*" element={<NotFound />} /> 
        </Routes>

        {/* section2 */}
        <Second />

        {/* section3 */}
        <HeroCards />
        <DailyBest />

        {/* section4 */}
        <Installment/>

        
      </BrowserRouter>
    </div>
  );
};

export default App;
