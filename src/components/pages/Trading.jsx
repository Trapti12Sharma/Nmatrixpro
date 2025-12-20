export default function Trading() {
  const instruments = [
    "Forex Trading",
    "CFDs",
    "Stocks",
    "Indices",
    "Cryptocurrencies",
    "Commodities",
  ];

  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Trading Instruments</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {instruments.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">
                Trade {item.toLowerCase()} with competitive spreads and fast
                execution.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
