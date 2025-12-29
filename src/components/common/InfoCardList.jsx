import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function InfoCardList({ title, subtitle, items, cta }) {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="space-y-5">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex gap-5 items-start border rounded p-5 hover:shadow-md transition"
            >
              <item.icon className="h-8 w-8 text-blue-500 shrink-0 mt-1" />

              <div>
                <h3 className="text-blue-600 font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-10 flex justify-center">
            <Link
              to={cta.link}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-semibold transition"
            >
              {cta.text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

InfoCardList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  cta: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};
