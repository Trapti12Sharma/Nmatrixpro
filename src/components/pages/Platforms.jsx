export default function Platforms() {
  return (
    <section className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Trading Platforms</h1>

        <div className="space-y-6">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Web Trading Platform</h3>
            <p className="text-gray-600">
              Trade directly from your browser with real-time charts and tools.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Mobile Trading App</h3>
            <p className="text-gray-600">
              Trade anytime, anywhere with our powerful mobile application.
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Advanced Desktop Platform
            </h3>
            <p className="text-gray-600">
              Professional-grade tools for advanced market analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
