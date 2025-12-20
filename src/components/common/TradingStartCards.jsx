export default function TradingStartCards({ title, cards = [] }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-light mb-16">{title}</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Triangle Shape */}
              <div className="w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[120px] border-b-blue-100 mb-6" />

              <h3 className="font-semibold mb-3">{card.title}</h3>

              <p className="text-sm text-gray-600 mb-4 max-w-xs">
                {card.description}
              </p>

              <span className="text-orange-500 text-sm cursor-pointer">
                {card.cta} →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
