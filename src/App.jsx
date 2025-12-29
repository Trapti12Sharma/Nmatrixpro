import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

/* ===================== HOME ===================== */
import Home from "./components/pages/home";

/* ===================== PRODUCTS ===================== */

/* Forex */
import ForexTrading from "./components/pages/products/forex/ForexTrading";
import WhatIsForex from "./components/pages/products/forex/WhatIsForex";
import HowToTradeForex from "./components/pages/products/forex/HowToTradeForex";
import VanillaOptions from "./components/pages/products/forex/VanillaOptions";

/* CFD */
import CFDTrading from "./components/pages/products/cfd/CFDTrading";
import WhatAreCFDs from "./components/pages/products/cfd/WhatAreCFDs";
import HowToTradeCFDs from "./components/pages/products/cfd/HowToTradeCFDs";
import BondsTreasuries from "./components/pages/products/cfd/BondsTreasuries";
import ETFsTrading from "./components/pages/products/cfd/ETFsTrading";

/* Stocks */
import StockTrading from "./components/pages/products/stocks/StockTrading";
import WhatAreStocks from "./components/pages/products/stocks/WhatAreStocks";
import HowToTradeStocks from "./components/pages/products/stocks/HowToTradeStocks";

/* Commodities */
import CommoditiesTrading from "./components/pages/products/commodities/CommoditiesTrading";
import HowToTradeCommodities from "./components/pages/products/commodities/HowToTradeCommodities";
import HowToTradeGold from "./components/pages/products/commodities/HowToTradeGold";
import HowToTradeOil from "./components/pages/products/commodities/HowToTradeOil";
import Energies from "./components/pages/products/commodities/Energies";
import PreciousMetals from "./components/pages/products/commodities/PreciousMetals";
import Agriculture from "./components/pages/products/commodities/Agriculture";

/* Indices */
import IndicesTrading from "./components/pages/products/indices/IndicesTrading";
import WhatAreIndices from "./components/pages/products/indices/WhatAreIndices";
import HowToTradeIndices from "./components/pages/products/indices/HowToTradeIndices";
import VIXIndex from "./components/pages/products/indices/VIXIndex";

/* ===================== TRADING PLATFORMS ===================== */

import WebTrader from "./components/pages/trading-platforms/WebTrader";
import AvaOptions from "./components/pages/trading-platforms/AvaOptions";
import AvaTradeApp from "./components/pages/trading-platforms/AvaTradeApp";
import MacTrading from "./components/pages/trading-platforms/MacTrading";
import MetaTrader4 from "./components/pages/trading-platforms/MetaTrader4";
import MetaTrader5 from "./components/pages/trading-platforms/MetaTrader5";
import WhatIsMetaTrader from "./components/pages/trading-platforms/WhatIsMetaTrader";
import GuardianAngel from "./components/pages/trading-platforms/GuardianAngel";
import ExpertAdvisors from "./components/pages/trading-platforms/ExpertAdvisors";
import VPS from "./components/pages/trading-platforms/VPS";
import HowToTradeMT5 from "./components/pages/trading-platforms/HowToTradeMT5";
import AlgoTradingMT5 from "./components/pages/trading-platforms/AlgoTradingMT5";
import AvaSocial from "./components/pages/trading-platforms/AvaSocial";
import DupliTrade from "./components/pages/trading-platforms/DupliTrade";
import About from "./components/pages/about";
import TradingInfo from "./components/pages/trading-info";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= FOREX ================= */}
        <Route path="/products/forex" element={<ForexTrading />} />
        <Route path="/products/forex/what-is-forex" element={<WhatIsForex />} />
        <Route
          path="/products/forex/how-to-trade-forex"
          element={<HowToTradeForex />}
        />
        <Route
          path="/products/forex/vanilla-options"
          element={<VanillaOptions />}
        />

        {/* ================= CFD ================= */}
        <Route path="/products/cfd" element={<CFDTrading />} />
        <Route path="/products/cfd/what-are-cfds" element={<WhatAreCFDs />} />
        <Route
          path="/products/cfd/how-to-trade-cfds"
          element={<HowToTradeCFDs />}
        />
        <Route
          path="/products/cfd/bonds-treasuries"
          element={<BondsTreasuries />}
        />
        <Route path="/products/cfd/etfs" element={<ETFsTrading />} />

        {/* ================= STOCKS ================= */}
        <Route path="/products/stocks" element={<StockTrading />} />
        <Route
          path="/products/stocks/what-are-stocks"
          element={<WhatAreStocks />}
        />
        <Route
          path="/products/stocks/how-to-trade-stocks"
          element={<HowToTradeStocks />}
        />

        {/* ================= COMMODITIES ================= */}
        <Route path="/products/commodities" element={<CommoditiesTrading />} />
        <Route
          path="/products/commodities/how-to-trade-commodities"
          element={<HowToTradeCommodities />}
        />
        <Route
          path="/products/commodities/how-to-trade-gold"
          element={<HowToTradeGold />}
        />
        <Route
          path="/products/commodities/how-to-trade-oil"
          element={<HowToTradeOil />}
        />
        <Route path="/products/commodities/energies" element={<Energies />} />
        <Route
          path="/products/commodities/precious-metals"
          element={<PreciousMetals />}
        />
        <Route
          path="/products/commodities/agriculture"
          element={<Agriculture />}
        />

        {/* ================= INDICES ================= */}
        <Route path="/products/indices" element={<IndicesTrading />} />
        <Route
          path="/products/indices/what-are-indices"
          element={<WhatAreIndices />}
        />
        <Route
          path="/products/indices/how-to-trade-indices"
          element={<HowToTradeIndices />}
        />
        <Route path="/products/indices/vix-index" element={<VIXIndex />} />

        {/* ================= TRADING PLATFORMS ================= */}
        <Route path="/trading-platforms/webtrader" element={<WebTrader />} />
        <Route path="/trading-platforms/avaoptions" element={<AvaOptions />} />
        <Route
          path="/trading-platforms/avatrade-app"
          element={<AvaTradeApp />}
        />
        <Route path="/trading-platforms/mac-trading" element={<MacTrading />} />
        <Route
          path="/trading-platforms/metatrader-4"
          element={<MetaTrader4 />}
        />
        <Route
          path="/trading-platforms/metatrader-5"
          element={<MetaTrader5 />}
        />
        <Route
          path="/trading-platforms/what-is-metatrader"
          element={<WhatIsMetaTrader />}
        />
        <Route
          path="/trading-platforms/guardian-angel"
          element={<GuardianAngel />}
        />
        <Route
          path="/trading-platforms/expert-advisors"
          element={<ExpertAdvisors />}
        />
        <Route path="/trading-platforms/vps" element={<VPS />} />
        <Route
          path="/trading-platforms/how-to-trade-mt5"
          element={<HowToTradeMT5 />}
        />
        <Route
          path="/trading-platforms/algorithmic-trading-mt5"
          element={<AlgoTradingMT5 />}
        />
        <Route path="/trading-platforms/ava-social" element={<AvaSocial />} />
        <Route path="/trading-platforms/duplitrade" element={<DupliTrade />} />

        <Route path="/about" element={<About />} />
        <Route path="/trading-info" element={<TradingInfo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
