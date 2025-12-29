import React from "react";
import {
  DollarSign,
  Coins,
  Bitcoin,
  BarChart3,
  TrendingUp,
} from "lucide-react";

/* ICON MAPPING */
const tradeIconMap = {
  "EUR/USD": <TrendingUp size={20} className="text-blue-600" />,
  Gold: <Coins size={20} className="text-yellow-500" />,
  Tesla: <BarChart3 size={20} className="text-gray-700" />,
  "Crude Oil": <DollarSign size={20} className="text-green-600" />,
  "BTC/USD": <Bitcoin size={20} className="text-orange-500" />,
};

const HeroTradingSection = ({
  backgroundImage,
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  note,
  tradeItems = [],
}) => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* DARK LEFT → TRANSPARENT RIGHT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1424]/95 via-[#0b1424]/85 to-transparent" />

      {/* EXTRA DEPTH */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-6">
              {title}
            </h1>

            <p className="text-base md:text-lg text-gray-200 max-w-xl mb-8">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 text-white font-semibold rounded-md">
                {primaryBtnText}
              </button>

              <button className="text-orange-400 font-semibold hover:underline">
                {secondaryBtnText} →
              </button>
            </div>

            {note && <p className="text-sm text-lime-400 mt-4">{note}</p>}
          </div>

          {/* RIGHT TRADE LIST */}
          <div className="space-y-4">
            {tradeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/95 text-black px-5 py-3 rounded-xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center">
                    {tradeIconMap[item.label]}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>

                <button className="text-sm font-semibold text-gray-700 hover:text-black">
                  Trade →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTradingSection;
