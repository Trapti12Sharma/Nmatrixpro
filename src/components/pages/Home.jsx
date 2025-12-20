import HeroSection from "../common/HeroSection";
// import StatsSection from "../common/StatsSection";
// import CTASection from "../common/CTASection";
import TradingConditions from "../common/TradingConditions";
import TradingStartCards from "../common/TradingStartCards";
import WhyDifferentSection from "../common/WhyDifferentSection";

import { BsGraphUp } from "react-icons/bs";
import { MdBolt } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TradingConditions
        title="Transparent Trading Conditions"
        buttonText="Trade Now"
        features={[
          { icon: BsGraphUp, text: "Tight spreads" },
          { icon: FiTrendingUp, text: "Up to 400:1 leverage" },
          { icon: FaPercentage, text: "Low commissions" },
          { icon: MdBolt, text: "Instant execution" },
        ]}
        instruments={[
          { name: "TESLA", price: "480.98", change: "0.00%" },
          { name: "AMAZON", price: "227.13", change: "0.00%" },
          { name: "APPLE", price: "272.56", change: "0.00%" },
          { name: "NETFLIX", price: "94.25", change: "0.00%" },
          { name: "GOLDMAN SACHS", price: "892.32", change: "0.00%" },
          { name: "MICROSOFT", price: "484.89", change: "0.00%" },
        ]}
      />
      <WhyDifferentSection
        title="What Makes Nmatrixpro Different?"
        subtitle="Join over 1 million returning clients who already made the right choice"
        backgroundImage="https://images.unsplash.com/photo-1549923746-c502d488b3ea"
        features={[
          {
            title: "We Want You to Succeed",
            description:
              "From developing the best educational material to daily market analysis.",
          },
          {
            title: "Endless Possibilities",
            description:
              "Access the world’s most popular instruments across all markets.",
          },
          {
            title: "Great Trading Conditions",
            description:
              "Ultra-fast execution, tight spreads, and transparent pricing.",
          },
          {
            title: "You Deserve the Best",
            description:
              "Expert advisors, advanced platforms, and professional tools.",
          },
          {
            title: "Stay in Touch",
            description:
              "Up-to-date news, webinars, and social channels for traders.",
          },
        ]}
      />
      <TradingStartCards
        title="Trading Starts Here"
        cards={[
          {
            title: "Trading Academy",
            description:
              "Learn with Academy for clear, structured lessons. Easy steps to build trading skills.",
            cta: "Explore Courses",
          },
          {
            title: "Education Section",
            description:
              "Read articles and watch tutorials that cover every trading topic.",
            cta: "Browse All Topics",
          },
          {
            title: "Live Webinars",
            description:
              "Attend our weekly live webinars to analyze trends and strategies.",
            cta: "Reserve Your Spot",
          },
        ]}
      />

      {/* <StatsSection />
      <CTASection /> */}
    </>
  );
}
