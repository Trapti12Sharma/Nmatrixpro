import HeroBanner from "../../../common/HeroBanner";
import ContentSection from "../../../common/ContentSection";
import FaqSection from "../../../common/FaqSection";
import bgForex from "../../../../assets/hero.png";
import TradingTipsSection from "../../../common/TradingTipsSection";
import worldMap from "../../../../assets/map.png";
import WhyChooseSection from "../../../common/WhyChooseSection";
import {
  MonitorPlay, // Demo account
  GraduationCap, // Learning
  ShieldAlert, // Risk management
  Brain, // Emotions
  NotebookPen, // Trading journal
} from "lucide-react";
export default function StockTrading() {
  return (
    <>
      <HeroBanner
        title="What is Forex?"
        description="Join us on a journey to unravel the secrets of Forex trading. Learn about the exciting world of currency exchange and how you can be part of this dynamic market."
        ctaText="Join NMATRIXPRO"
        ctaLink="/register"
        backgroundImage={bgForex}
        // sideImage={phoneForex}
      />
      <ContentSection
        title="What is Foreign Exchange?"
        paragraphs={[
          "Suppose you have ever travelled overseas and converted your money into another currency or shopped online in a currency other than your local one. In that case, you have participated in the forex markets.",
          "The impact of Forex affects many aspects of our daily lives, such as the price of fuel, food, imported goods, travel, and more. As consumers, all of this foreign exchange takes place without our intervention.",
          "Forex market is a thrilling trading environment operating 24/5 and boasting daily trading volumes of trillions of dollars. It is by far the largest and most liquid of all financial markets.",
        ]}
        highlight="Forex Definition: Foreign Exchange, aka Forex or FX, refers to exchanging one currency for another."
        cta={{
          primaryText: "Register Now",
          primaryLink: "/register",
          secondaryText: "Or Try Free Demo",
          secondaryLink: "/demo",
        }}
      />
      <TradingTipsSection
        title="Forex Trading Tips"
        subtitle="Here are some tips to become a better and consistent Forex trader:"
        tips={[
          { icon: MonitorPlay, label: "Practice on a Demo Account" },
          { icon: GraduationCap, label: "Keep Learning About the Markets" },
          { icon: ShieldAlert, label: "Use Risk Management Techniques" },
          { icon: Brain, label: "Control Your Emotions" },
          { icon: NotebookPen, label: "Keep a Trading Journal" },
        ]}
        details={[
          {
            title: "Utilize a demo trading account",
            text: "Always utilize a demo account even if you no longer consider yourself a beginner. A demo account helps you continuously refine your trading skills without real risk.",
          },
          {
            title: "Keep learning",
            text: "Markets are dynamic. Keep your desire to learn alive to improve your trading ability and experience continuously.",
          },
          {
            title: "Always use stop-losses",
            text: "Forex markets are highly risky. Always ensure that you protect your capital at all times.",
          },
          {
            title: "Control your emotions",
            text: "Emotions such as fear, greed, and overconfidence can lead to irrational decisions when trading.",
          },
          {
            title: "Keep a trading log",
            text: "Maintain a trading journal to identify effective strategies and areas that need improvement.",
          },
        ]}
        cta={{
          primaryText: "Register Now",
          primaryLink: "/register",
          secondaryText: "Or Try Free Demo",
          secondaryLink: "/demo",
        }}
      />

      <WhyChooseSection
        title="Why Trade Forex with AvaTrade"
        subtitle="Forex trading can be gratifying and profitable, but potential risks must always be considered. When you join AvaTrade, you enjoy a comprehensive trading experience for all levels of traders."
        mapImage={worldMap}
        // regulators={[
        //   { code: "FJ", name: "FFAJ" },
        //   { code: "CY", name: "CySEC" },
        //   { code: "IA", name: "ISA" },
        //   { code: "FD", name: "IFROC - Friedberg Direct" },
        //   { code: "AD", name: "ADGM / FSRA" },
        //   { code: "CB", name: "CBI" },
        //   { code: "BV", name: "BVIFSC" },
        //   { code: "FC", name: "FSCA" },
        //   { code: "AI", name: "ASIC" },
        // ]}
        benefits={[
          {
            title: "Trader Education",
            text: "Free access to trading courses, webinars, tutorials, and expert analysis.",
          },
          {
            title: "User-Friendly Platforms",
            text: "Trade using intuitive platforms available on desktop and mobile.",
          },
          {
            title: "Award-Winning Support",
            text: "Multilingual customer support via live chat, phone, and email.",
          },
          {
            title: "Security & Regulation",
            text: "Licensed and regulated by multiple international authorities.",
          },
          {
            title: "Innovative Trading Tools",
            text: "Advanced charting, social trading, and algorithmic solutions.",
          },
          {
            title: "Competitive Pricing",
            text: "Transparent fees and tight spreads help maximize ROI.",
          },
          {
            title: "Risk Management Tools",
            text: "Stop-losses, alerts, negative balance protection, and more.",
          },
        ]}
        cta={{
          primaryText: "Register Now",
          primaryLink: "/register",
          secondaryText: "Or Try Free Demo",
          secondaryLink: "/demo",
        }}
      />

      <FaqSection
        title="Forex FAQ"
        faqs={[
          {
            question: "What is Forex in simple words?",
            answer:
              "Forex, short for foreign exchange, is a global marketplace where national currencies are traded against each other based on their relative values.",
          },
          {
            question: "What is Forex and how does it work?",
            answer:
              "Forex operates on the concept of currency pairs. You buy or sell pairs based on your prediction of how one currency will perform against the other.",
          },
          {
            question: "Are Forex Markets Regulated?",
            answer:
              "Yes, Forex markets are regulated by financial authorities across different regions to ensure transparency and protect traders.",
          },
          {
            question: "Are Forex Markets Volatile?",
            answer:
              "Forex markets can be highly volatile due to economic data, geopolitical events, and market sentiment.",
          },
          {
            question: "Is Forex trading profitable?",
            answer:
              "Forex trading can be profitable, but it involves significant risk and requires proper knowledge, strategy, and risk management.",
          },
          {
            question: "How do Forex brokers make money?",
            answer:
              "Forex brokers typically earn through spreads, commissions, or a combination of both.",
          },
        ]}
      />
    </>
  );
}
