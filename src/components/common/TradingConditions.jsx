import { FiSearch } from "react-icons/fi";
import { BsGraphUp } from "react-icons/bs";
import { MdBolt } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";

export default function TradingConditions({
  title = "Transparent Trading Conditions",
  features = [],
  instruments = [],
  buttonText = "Trade Now",
}) {
  return (
    <section className="bg-[#eef4ff] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ───────── Left Instrument Panel ───────── */}
        <div className="bg-white border rounded-lg shadow-sm w-full max-w-md mx-auto lg:mx-0">
          {/* Search */}
          <div className="p-4 border-b flex items-center gap-2">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for an instrument"
              className="w-full outline-none text-sm"
            />
          </div>

          {/* Tabs (Static UI like AvaTrade) */}
          <div className="grid grid-cols-8 text-center border-b text-xs">
            {["🔥", "$", "%", "📊", "₿", "↺", "⟳", "⚙"].map((tab, i) => (
              <div
                key={i}
                className={`py-3 border-r last:border-r-0 ${
                  i === 0 ? "bg-blue-100 text-blue-600" : "text-gray-500"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Instrument List */}
          <div className="divide-y">
            {instruments.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 text-sm"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">Market Closed</p>
                </div>

                <div className="text-right">
                  <p className="font-medium">{item.price}</p>
                  <p className="text-xs text-gray-400">{item.change}</p>
                </div>

                <button className="text-blue-600 text-sm font-medium">
                  Trade →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── Right Content ───────── */}
        <div>
          <h2 className="text-3xl md:text-4xl font-light mb-8">{title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-blue-600"
              >
                <feature.icon className="text-xl" />
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 text-sm font-semibold">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
