import PropTypes from "prop-types";

export default function TradingTipsSection({
  title,
  subtitle,
  tips,
  details,
  cta,
}) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-xl md:text-2xl font-semibold text-blue-500">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm md:text-base text-gray-600">{subtitle}</p>
        )}

        {/* Tips Icons Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {tips.map((tip, index) => (
            <div key={index}>
              <div className="flex flex-col items-center gap-3">
                <tip.icon className="h-8 w-8 text-blue-500" />
                <p className="text-sm font-medium text-gray-800">{tip.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Explanations */}
        <div className="mt-10 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
          {details.map((item, index) => (
            <p key={index}>
              <strong>{item.title}</strong> — {item.text}
            </p>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={cta.primaryLink}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-semibold transition"
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

TradingTipsSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  tips: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  cta: PropTypes.shape({
    primaryText: PropTypes.string.isRequired,
    primaryLink: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    secondaryLink: PropTypes.string,
  }),
};
