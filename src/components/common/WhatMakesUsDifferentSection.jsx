import { motion } from "framer-motion";

export default function WhatMakesUsDifferentSection({
  title,
  subtitle,
  image,
  features = [],
}) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, #0b131a 55%, rgba(11,19,26,0.7), rgba(11,19,26,0.3)),
          url(${image})
        `,
        backgroundSize: "cover",
        backgroundPosition: "right center",
      }}
    >
      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            {title}
          </h2>
          <p className="text-sm text-gray-300">{subtitle}</p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Accent line */}
              <div className="w-8 h-[2px] bg-lime-300 mb-4" />

              <h4 className="text-lg font-medium text-lime-300 mb-4 leading-snug">
                {item.title}
              </h4>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
