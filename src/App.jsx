import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Education from "./components/pages/Education";
import Contact from "./components/pages/Contact";
import Partners from "./components/pages/Partners";

// Trading pages
import TradingForex from "./components/pages/trading/TradingForex";
import TradingCFD from "./components/pages/trading/TradingCFD";
import TradingStocks from "./components/pages/trading/TradingStocks";
import TradingCommodities from "./components/pages/trading/TradingCommodities";
import TradingIndices from "./components/pages/trading/TradingIndices";
import TradingFutures from "./components/pages/trading/TradingFutures";

// Platform pages
import WebTrader from "./components/pages/platforms/WebTrader";
import MT4 from "./components/pages/platforms/MT4";
import MT5 from "./components/pages/platforms/MT5";

// Info
import TradingInfo from "./components/pages/TradingInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />

        {/* Trading */}
        <Route path="/trading/forex" element={<TradingForex />} />
        <Route path="/trading/cfd" element={<TradingCFD />} />
        <Route path="/trading/stocks" element={<TradingStocks />} />
        <Route path="/trading/commodities" element={<TradingCommodities />} />
        <Route path="/trading/indices" element={<TradingIndices />} />
        <Route path="/trading/futures" element={<TradingFutures />} />

        {/* Platforms */}
        <Route path="/platforms/webtrader" element={<WebTrader />} />
        <Route path="/platforms/mt4" element={<MT4 />} />
        <Route path="/platforms/mt5" element={<MT5 />} />

        {/* Trading Info */}
        <Route path="/trading-info" element={<TradingInfo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
