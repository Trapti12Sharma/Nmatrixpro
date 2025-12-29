import React from "react";

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
      className="relative w-full min-h-[90vh] flex items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight mb-6">
              {title}
            </h1>

            <p className="text-base md:text-lg text-gray-200 max-w-xl mb-8">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-7 py-3 text-white font-semibold rounded">
                {primaryBtnText}
              </button>

              <button className="text-orange-400 font-semibold hover:underline">
                {secondaryBtnText} →
              </button>
            </div>

            {note && <p className="text-sm text-lime-300 mt-4">{note}</p>}
          </div>

          {/* RIGHT TRADE LIST */}
          <div className="space-y-4">
            {tradeItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white/90 text-black px-5 py-3 rounded-lg shadow-md backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-6 h-6 object-contain"
                  />
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
