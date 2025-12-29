import { motion } from "framer-motion";

export default function TradingStartsHereSection({ title, cards = [] }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-medium text-gray-900 mb-16"
        >
          {title}
        </motion.h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* TRIANGLE SHAPE */}
              <div className="relative mx-auto mb-6 w-40 h-36">
                <div className="absolute inset-0 clip-triangle bg-gradient-to-br from-indigo-200 to-indigo-400 opacity-80" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 max-w-xs mx-auto mb-4">
                {card.description}
              </p>

              {/* LINK */}
              <a
                href={card.link}
                className="text-sm font-medium text-orange-500 hover:text-orange-600 transition"
              >
                {card.linkText} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TRIANGLE CLIP STYLE */}
      <style>
        {`
          .clip-triangle {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          }
        `}
      </style>
    </section>
  );
}
