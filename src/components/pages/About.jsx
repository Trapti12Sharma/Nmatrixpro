import { ShieldCheck, UserCheck, RefreshCw, BarChart3 } from "lucide-react";

import ValuesVisionSection from "../common/ValuesVisionSection";
import visionImg from "../../assets/vision.png";
import bgForex from "../../assets/about.png";
import HeroBanner from "../common/HeroBanner";
export default function about() {
  return (
    <>
      <HeroBanner
        title="About"
        description="NMATRIXPRO Pioneering Online Trading Since 2006
We are one of the most secure brokers in the industry,
with 9 regulations across 6 continents.
We offer a wide choice of assets, leading platforms
and generous trading conditions."
        ctaText="Join NMATRIXPRO"
        ctaLink="/register"
        backgroundImage={bgForex}
        // sideImage={phoneForex}
      />
      <ValuesVisionSection
        valuesTitle="Our Values"
        values={[
          {
            icon: ShieldCheck,
            smallTitle: "Integrity and",
            mainTitle: "Fairness",
          },
          {
            icon: UserCheck,
            smallTitle: "Customer Service",
            mainTitle: "Above All Else",
          },
          {
            icon: RefreshCw,
            smallTitle: "Ongoing",
            mainTitle: "Self-Improvement",
          },
          {
            icon: BarChart3,
            smallTitle: "Constant",
            mainTitle: "Innovation",
          },
        ]}
        visionTitle="Our Vision"
        visionText="We are committed to empowering people to invest and trade with confidence, in an innovative and reliable environment; supported by best-in-class personal service and uncompromising integrity."
        visionImage={visionImg}
        cta={{
          text: "Register Now",
          link: "/register",
        }}
      />
    </>
  );
}
