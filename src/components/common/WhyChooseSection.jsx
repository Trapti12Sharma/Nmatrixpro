import PropTypes from "prop-types";

export default function WhyChooseSection({
  title,
  subtitle,
  mapImage,
  regulators = [],
  benefits = [],
  cta,
}) {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-4 text-sm md:text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Map */}
        <div className="mt-14 flex justify-center">
          <img
            src={mapImage}
            alt="Global regulations map"
            className="w-full max-w-3xl max-h-[360px] object-contain"
          />
        </div>

        {/* Regulators */}
        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-4">
            {regulators.map((reg, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <span className="h-7 w-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold">
                  {reg.code}
                </span>
                <span className="text-gray-700 font-medium">{reg.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14 max-w-5xl mx-auto">
          <ul className="space-y-4 text-sm md:text-base text-gray-700">
            {benefits.map((item, index) => (
              <li key={index}>
                <strong className="text-gray-900">{item.title}</strong> —{" "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={cta.primaryLink}
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 text-sm font-semibold transition"
            >
              {cta.primaryText}
            </a>

            {cta.secondaryText && cta.secondaryLink && (
              <a
                href={cta.secondaryLink}
                className="text-sm text-gray-500 underline"
              >
                {cta.secondaryText}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

WhyChooseSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  mapImage: PropTypes.string.isRequired,
  regulators: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  cta: PropTypes.shape({
    primaryText: PropTypes.string.isRequired,
    primaryLink: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    secondaryLink: PropTypes.string,
  }),
};
