import PropTypes from "prop-types";

export default function ValuesVisionSection({
  valuesTitle,
  values,
  visionTitle,
  visionText,
  visionImage,
  cta,
}) {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= VALUES ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Values Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div key={index} className="flex gap-4">
                <item.icon className="h-8 w-8 text-blue-500 shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">{item.smallTitle}</p>
                  <p className="font-semibold text-gray-900">
                    {item.mainTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Values Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {valuesTitle}
            </h2>
            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              {visionText}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t" />

        {/* ================= VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Vision Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {visionTitle}
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
              {visionText}
            </p>

            {cta && (
              <a
                href={cta.link}
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-semibold transition"
              >
                {cta.text}
              </a>
            )}
          </div>

          {/* Vision Image */}
          <div className="flex justify-center">
            <img
              src={visionImage}
              alt="Vision"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

ValuesVisionSection.propTypes = {
  valuesTitle: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      smallTitle: PropTypes.string.isRequired,
      mainTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
  visionTitle: PropTypes.string.isRequired,
  visionText: PropTypes.string.isRequired,
  visionImage: PropTypes.string.isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};
