import HeroTradingSection from "../common/HeroTradingSection";
import MobilePlatformsSection from "../common/MobilePlatformsSection";
import TradingPlatformsGrid from "../common/TradingPlatformsGrid";
import GlobalRegulationSection from "../common/GlobalRegulationSection";
import TradingStartsHereSection from "../common/TradingStartsHereSection";
import TradingConditionsSection from "../common/TradingStartsHereSection";
import WhatMakesUsDifferentSection from "../common/WhatMakesUsDifferentSection";

import mobilePlatformsImg from "../../assets/nmatrix1.png";
import nmatrixhome from "../../assets/nmatrixhome.png";
import nmatrix2 from "../../assets/nmatrix2.png";
import nmatrix3 from "../../assets/nmatrix3.png";

export default function Home() {
  const platformItems = [
    {
      title: "WebTrader",
      description: "A sleek, easy to use desktop trading platform",
      // image: webTraderImg,
      span: "large",
    },
    {
      title: "MetaTrader 4",
      description: "No.1 trading platform",
      // image: mt4Img,
    },
    {
      title: "MetaTrader 5",
      description: "Advanced trading across 250 assets",
      // image: mt5Img,
    },
    {
      title: "DupliTrade™",
      description: "Automated trading made simple",
      // image: dupliTradeImg,
    },
    {
      title: "AvaOptions",
      description: "Balance risk and reward to match your market view",
      // image: avaOptionsImg,
      span: "full",
    },
  ];

  return (
    <>
      {/* HERO */}
      <HeroTradingSection
        backgroundImage={nmatrixhome}
        title="A World-Class Trading Experience"
        description="Step into global markets and trade with confidence across Stocks, Crypto, FX, Commodities, Indices and more, with AvaTrade, a highly regulated multi-asset broker. What will you trade today?"
        primaryBtnText="Join NmatrixPro"
        secondaryBtnText="Free Demo"
        note="Please note: markets will be closed for Christmas
        and New Year’s."
        tradeItems={[
          { label: "EUR/USD" },
          { label: "Gold" },
          { label: "Tesla" },
          { label: "Crude Oil" },
          { label: "BTC/USD" },
        ]}
      />

      {/* MOBILE PLATFORMS */}
      <MobilePlatformsSection
        title="Powerful Mobile Platforms"
        highlight="You Can Trust"
        description="Enjoy a fully immersive trading experience across a range of powerful platforms tailored to all levels."
        image={mobilePlatformsImg}
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
        items={platformItems}
      />

      {/* GLOBAL REGULATION SECTION */}
      <GlobalRegulationSection
        title="You're in Safe Hands"
        description="NmatrixPro is regulated across multiple jurisdictions, with a wide global corporate presence."
        ctaText="Register Now"
        globeImage={nmatrix2}
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
              "Learn with AvaAcademy for clear, structured lessons. Easy steps to build trading skills. No experience needed.",
            link: "#",
            linkText: "Explore Courses",
          },
          {
            title: "Education Section",
            description:
              "Read articles and watch tutorials that cover every trading aspect. All topics, all levels, all in one click.",
            link: "#",
            linkText: "Browse All Topics",
          },
          {
            title: "Live Webinars",
            description:
              "Attend our weekly live webinars to analyse trends. Improve your trading skills, in simple and understandable terms.",
            link: "#",
            linkText: "Reserve Your Spot",
          },
        ]}
      />

      <WhatMakesUsDifferentSection
        title="What Makes AvaTrade Different?"
        subtitle="Join Over 1 Million Returning Clients who already made the right choice"
        image={nmatrix3}
        features={[
          {
            title: "We Want You to Succeed",
            description:
              "From developing the best educational materials out there, to providing daily market analysis updates and live webinars, we are as interested in your success as you are.",
          },
          {
            title: "We Believe in Endless Possibilities",
            description:
              "Access the world’s most popular instruments, ranging from forex pairs to CFDs on stocks, indices, commodities and cryptocurrencies – all at the palm of your hand.",
          },
          {
            title: "Great Trading Conditions",
            description:
              "Hedging is allowed, without any restrictions on short selling and scalping. We provide fast and reliable order execution, as well as ultra-low spreads.",
          },
          {
            title: "We Believe You Deserve The Best",
            description:
              "Take advantage of our Expert Advisors, Copy Trading platforms and 24/7 crypto trading. Try our unique risk management tool AvaProtect™, or utilise the Trading Central automated analysis add-on.",
          },
          {
            title: "We Love to Stay in Touch!",
            description:
              "Stay up-to-date on the latest market news, promotions and offers! Blog, Twitter, Facebook page, YouTube channel.",
          },
        ]}
      />
    </>
  );
}
