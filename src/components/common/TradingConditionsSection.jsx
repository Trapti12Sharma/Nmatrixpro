import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  DollarSign,
  CandlestickChart,
  Percent,
  LineChart,
  Bitcoin,
  Network,
  RefreshCw,
  Search,
  BarChart3,
  TrendingUp,
  Zap,
  CheckSquare,
} from "lucide-react";

const tabs = [
  Flame,
  DollarSign,
  CandlestickChart,
  Percent,
  LineChart,
  Bitcoin,
  Network,
  RefreshCw,
];

const features = [
  { icon: BarChart3, text: "Tight spreads" },
  { icon: TrendingUp, text: "Up to 400:1 leverage" },
  { icon: Zap, text: "Low commissions" },
  { icon: CheckSquare, text: "Instant execution" },
];

export default function TradingConditionsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative w-full bg-[#eef4ff] py-24 overflow-hidden">
      {/* ANGLED BACKGROUND SHAPES */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef4ff] to-[#dfe7ff]" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100 rotate-45 opacity-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rotate-45 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-blue-200 rounded-md shadow-sm"
        >
          {/* SEARCH BAR */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-blue-200">
            <Search size={18} className="text-blue-500" />
            <input
              placeholder="Search for an instrument"
              className="w-full text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          {/* ICON TABS */}
          <div className="grid grid-cols-8 border-b border-blue-200">
            {tabs.map((Icon, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`py-3 flex items-center justify-center border-r last:border-r-0 transition ${
                  activeTab === index
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-blue-50"
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>

          {/* LIST LABEL */}
          <div className="p-6 text-blue-600 text-sm font-medium">
            Most Popular
          </div>

          {/* LOADER */}
          <div className="flex items-center justify-center h-44">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "linear",
              }}
              className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 leading-snug">
            Transparent Trading
            <br />
            Conditions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-blue-600"
                >
                  <Icon size={22} />
                  <span className="text-sm">{item.text}</span>
                </div>
              );
            })}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-md font-medium">
            Trade Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
