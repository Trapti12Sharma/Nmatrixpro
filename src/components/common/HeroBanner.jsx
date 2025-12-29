import PropTypes from "prop-types";

export default function HeroBanner({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  sideImage,
  align = "left", // "left" | "center"
}) {
  return (
    <section
      className="w-full min-h-[420px] md:min-h-[520px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* TEXT CONTENT */}
          <div
            className={`text-white ${
              align === "center" ? "text-center lg:col-span-2" : ""
            }`}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-sm md:text-lg text-gray-200 max-w-xl">
              {description}
            </p>

            {ctaText && (
              <a
                href={ctaLink}
                className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-semibold rounded transition"
              >
                {ctaText}
              </a>
            )}
          </div>

          {/* SIDE IMAGE */}
          {sideImage && align !== "center" && (
            <div className="hidden lg:flex justify-end">
              <img
                src={sideImage}
                alt="hero visual"
                className="max-h-[420px] object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

HeroBanner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
  sideImage: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
};
