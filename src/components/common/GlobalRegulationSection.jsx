import { motion } from "framer-motion";

export default function GlobalRegulationSection({
  title,
  description,
  ctaText,
  globeImage,
  regulators = [],
}) {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 3 COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {title}
            </h2>

            <p className="text-gray-600 max-w-sm mb-8">{description}</p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-sm font-medium rounded transition">
              {ctaText}
            </button>
          </motion.div>

          {/* CENTER GLOBE */}
          <motion.div
            className="relative flex justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={globeImage}
              alt="Global Regulation"
              className="w-full max-w-[420px]"
            />
          </motion.div>

          {/* RIGHT REGULATORS */}
          <div className="space-y-6">
            {regulators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <span className="w-9 h-9 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-semibold shrink-0">
                  {item.short}
                </span>

                <div>
                  <p className="text-sm font-medium text-gray-900 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
