import HeroTradingSection from "../common/HeroTradingSection";
import MobilePlatformsSection from "../common/MobilePlatformsSection";
import TradingPlatformsGrid from "../common/TradingPlatformsGrid";
import GlobalRegulationSection from "../common/GlobalRegulationSection";
import TradingStartsHereSection from "../common/TradingStartsHereSection";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroTradingSection
        title="A World-Class Trading Experience"
        description="Step into global markets and trade with confidence across Stocks, Crypto, FX, Commodities, Indices and more."
        primaryBtnText="Join NmatrixPro"
        secondaryBtnText="Free Demo"
        note="Please note: markets will be closed for Christmas and New Year’s."
        tradeItems={[
          { label: "EUR/USD", icon: "/icons/eurusd.png" },
          { label: "Gold", icon: "/icons/gold.png" },
          { label: "Tesla", icon: "/icons/tesla.png" },
          { label: "Crude Oil", icon: "/icons/oil.png" },
          { label: "BTC/USD", icon: "/icons/btc.png" },
        ]}
      />

      {/* MOBILE PLATFORMS */}
      <MobilePlatformsSection
        title="Powerful Mobile Platforms"
        highlight="You Can Trust"
        description="Enjoy a fully immersive trading experience across a range of powerful platforms tailored to all levels."
        image="/images/mobile-platforms.png"
        platforms={[
          { title: "AvaTrade Mobile App" },
          {
            title: "Mobile WebTrader",
            subtitle: "No download, easy-to-use interface.",
            highlight: true,
          },
          { title: "AvaSocial" },
          { title: "AvaOptions" },
          { title: "MetaTrader 4/5" },
        ]}
      />

      {/* TRADING PLATFORMS GRID */}
      <TradingPlatformsGrid
        title="Endless Trading Opportunities Await"
        subtitle="Try our advanced platforms and never miss a trade!"
        items={[
          {
            title: "WebTrader",
            description: "A sleek, easy to use desktop trading platform",
            image: "/images/webtrader.jpg",
            large: true,
          },
          {
            title: "MetaTrader 4",
            description: "No.1 trading platform",
            image: "/images/mt4.jpg",
          },
          {
            title: "MetaTrader 5",
            description: "Advanced trading across 250 assets",
            image: "/images/mt5.jpg",
          },
          {
            title: "DupliTrade™",
            description: "Automated trading made simple",
            image: "/images/duplitrade.jpg",
          },
          {
            title: "AvaOptions",
            description: "Balance risk and reward to match your market view",
            image: "/images/avaoptions.jpg",
            large: true,
          },
        ]}
      />

      {/* GLOBAL REGULATION SECTION */}
      <GlobalRegulationSection
        title="You're in Safe Hands"
        description="NmatrixPro is regulated across multiple jurisdictions, with a wide global corporate presence."
        ctaText="Register Now"
        globeImage="/images/world-map.png"
        regulators={[
          {
            short: "FSA",
            name: "Financial Services Agency",
            description: "Japan",
          },
          {
            short: "CySEC",
            name: "Cyprus Securities and Exchange Commission",
            description: "Cyprus",
          },
          {
            short: "ISA",
            name: "Israel Securities Authority",
            description: "Israel",
          },
          {
            short: "IIROC",
            name: "Investment Industry Regulatory Organization",
            description: "Canada",
          },
          {
            short: "CBI",
            name: "Central Bank of Ireland",
            description: "Ireland",
          },
          {
            short: "BVIFSC",
            name: "BVI Financial Services Commission",
            description: "British Virgin Islands",
          },
          {
            short: "FSCA",
            name: "Financial Sector Conduct Authority",
            description: "South Africa",
          },
          {
            short: "ASIC",
            name: "Australian Securities & Investments Commission",
            description: "Australia",
          },
        ]}
      />

      {/* TRADING STARTS HERE */}
      <TradingStartsHereSection
        title="Trading Starts Here"
        cards={[
          {
            title: "Trading Academy",
            description:
              "Learn with Academy for clear, structured lessons. Easy steps to build trading skills. No experience needed.",
            linkText: "Explore Courses",
            link: "/academy",
          },
          {
            title: "Education Section",
            description:
              "Read articles and watch tutorials that cover every trading aspect. All topics, all levels, all in one click.",
            linkText: "Browse All Topics",
            link: "/education",
          },
          {
            title: "Live Webinars",
            description:
              "Attend our weekly live webinars to analyse trends and improve your trading skills in real time.",
            linkText: "Reserve Your Spot",
            link: "/webinars",
          },
        ]}
      />
    </>
  );
}
