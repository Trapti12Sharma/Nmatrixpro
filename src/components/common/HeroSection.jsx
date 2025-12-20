export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            A World-Class <br />
            <span className="font-semibold">Trading Experience</span>
          </h1>

          <p className="text-sm md:text-base text-gray-200 mb-8 leading-relaxed">
            Be empowered to trade on FX, Stocks, Commodities, Indices & Options.
            Get advanced tools, professional support, and uncompromising
            security.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 text-sm font-semibold">
              Join Nmatrixpro
            </button>
            <span className="text-sm underline cursor-pointer">Free Demo</span>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-xs">
              ★★★★☆
            </div>
            <p className="text-xs text-gray-300">
              Trusted by traders worldwide
            </p>
          </div>
        </div>

        {/* Right Market Cards */}
        <div className="hidden lg:flex justify-end">
          <div className="space-y-4 w-[360px]">
            <MarketCard title="EUR/USD" price="1.1701" />
            <MarketCard title="Gold" price="4,339.13" />
            <MarketCard title="Tesla" price="481.36" />
            <MarketCard title="Crude Oil" price="56.56" />
            <MarketCard title="BTC/USD" price="88,194.84" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Market Card ───────── */
function MarketCard({ title, price }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm flex items-center justify-between px-4 py-3 rounded shadow">
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-500">Market Closed</p>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold">{price}</p>
        <p className="text-xs text-blue-600">0.00%</p>
      </div>

      <button className="ml-4 text-sm text-blue-600 font-medium">
        Trade →
      </button>
    </div>
  );
}
