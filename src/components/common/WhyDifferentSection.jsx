export default function WhyDifferentSection({
  title,
  subtitle,
  features = [],
  backgroundImage,
}) {
  return (
    <section className="relative bg-[#0b0f19] text-white py-24 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light mb-3">{title}</h2>

        <p className="text-sm text-gray-400 mb-14">{subtitle}</p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {features.map((item, index) => (
            <div key={index}>
              <div className="w-8 h-[2px] bg-lime-400 mb-4" />
              <h4 className="text-lime-400 font-medium mb-3">{item.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
