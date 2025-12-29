import bgForex from "../../assets/trading-info.png";
import HeroBanner from "../common/HeroBanner";
import {
  Users,
  Network,
  Calculator,
  CalendarDays,
  TrendingUp,
  FileText,
} from "lucide-react";
import InfoCardList from "../common/InfoCardList";
export default function about() {
  return (
    <>
      <HeroBanner
        title="Trading-Info"
        description=""
        ctaText=""
        ctaLink="/register"
        backgroundImage={bgForex}
        // sideImage={phoneForex}
      />
      <InfoCardList
        title="Trading Information"
        subtitle="Confident trading starts with confidence. AvaTrade provides all the essential tools and insights to help you trade safely and effectively."
        items={[
          {
            icon: Users,
            title: "AvaSocial",
            description:
              "An innovative social trading app that allows you to copy the world’s best traders and learn from their success.",
            link: "/trading-platforms/ava-social",
          },
          {
            icon: Network,
            title: "What Types of Brokers Are There",
            description:
              "Understand the different types of forex brokers and how they operate.",
            link: "/trading-info/broker-types",
          },
          {
            icon: Calculator,
            title: "Profit Calculator",
            description:
              "Calculate margins, spreads, swaps and more before opening a trade.",
            link: "/trading-info/profit-calculator",
          },
          {
            icon: CalendarDays,
            title: "Economic Calendar",
            description:
              "Track key financial events that impact the global markets.",
            link: "/trading-info/economic-calendar",
          },
          {
            icon: TrendingUp,
            title: "Stocks Earnings Releases",
            description:
              "Stay updated with scheduled earnings reports for major stocks.",
            link: "/trading-info/earnings",
          },
          {
            icon: FileText,
            title: "CFD Rollover",
            description:
              "Monitor upcoming CFD rollover dates for open trading positions.",
            link: "/trading-info/cfd-rollover",
          },
        ]}
        cta={{
          text: "Register Now",
          link: "/register",
        }}
      />
      );
    </>
  );
}
