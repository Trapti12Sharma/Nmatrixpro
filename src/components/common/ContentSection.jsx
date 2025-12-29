import PropTypes from "prop-types";

export default function ContentSection({
  title,
  paragraphs = [],
  highlight,
  cta,
}) {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-blue-500">
          {title}
        </h2>

        {/* Paragraphs */}
        <div className="mt-6 space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>

        {/* Highlight / Definition */}
        {highlight && (
          <p className="mt-8 font-semibold text-gray-800">{highlight}</p>
        )}

        {/* CTA */}
        {cta && (
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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

ContentSection.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  highlight: PropTypes.string,
  cta: PropTypes.shape({
    primaryText: PropTypes.string.isRequired,
    primaryLink: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
    secondaryLink: PropTypes.string,
  }),
};
