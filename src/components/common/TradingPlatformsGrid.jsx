import { motion } from "framer-motion";

export default function TradingPlatformsGrid({ title, subtitle, items }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* CUSTOM GRID (MATCHES REFERENCE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 ${
                item.span === "full"
                  ? "md:col-span-2 h-[260px]"
                  : item.span === "large"
                  ? "h-[260px]"
                  : "h-[220px]"
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1028]/80 via-[#0b1028]/40 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm mt-1 max-w-md">
                  {item.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm text-lime-300 font-medium">
                  Learn More <span className="text-lg">›</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
