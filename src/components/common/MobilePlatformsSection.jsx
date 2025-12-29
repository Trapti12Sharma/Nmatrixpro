import React from "react";

export default function MobilePlatformsSection({
  title,
  highlight,
  description,
  image,
  platforms = [],
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1622]">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-green-900/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-14">
          {title}{" "}
          <span className="text-blue-500 font-semibold">{highlight}</span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">
          {/* Left text */}
          <div className="text-gray-300 text-base md:text-lg leading-relaxed">
            {description}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Mobile trading platforms"
              className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] drop-shadow-2xl"
            />
          </div>

          {/* Right list */}
          <div className="space-y-6">
            {platforms.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-l border-green-400 pl-4"
              >
                <div>
                  <h4
                    className={`text-lg font-medium ${
                      item.highlight ? "text-green-400" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {item.subtitle && (
                    <p className="text-sm text-gray-400 mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
