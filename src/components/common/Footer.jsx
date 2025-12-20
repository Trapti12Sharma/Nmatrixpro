import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400">
      {/* ───────── Top Payment Bar ───────── */}
      <div className="border-b border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-blue-400 mb-4">Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-90">
            <span className="font-semibold text-white">VISA</span>
            <span className="font-semibold text-white">PayPal</span>
            <span className="font-semibold text-white">Skrill</span>
            <span className="font-semibold text-white">Neteller</span>
            <span className="font-semibold text-white">Wire Transfer</span>
          </div>
        </div>
      </div>

      {/* ───────── Main Links Grid ───────── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 text-sm">
        <FooterColumn
          title="Forex Trading"
          items={[
            "What is Forex",
            "How to Trade Forex",
            "Forex Pairs",
            "Vanilla Options",
          ]}
        />

        <FooterColumn
          title="CFD Trading"
          items={[
            "What are CFDs",
            "ETFs Trading",
            "Commodities",
            "Indices Trading",
            "Stock Trading",
          ]}
        />

        <FooterColumn
          title="Platforms"
          items={[
            "WebTrader",
            "MetaTrader 4",
            "MetaTrader 5",
            "Mobile Trading",
            "Automated Trading",
          ]}
        />

        <FooterColumn
          title="Cryptocurrencies"
          items={["Bitcoin", "Ethereum", "Ripple", "Litecoin", "Crypto Index"]}
        />

        <FooterColumn
          title="Trading Info"
          items={[
            "Economic Calendar",
            "Trading Central",
            "Market Analysis",
            "Earnings Reports",
          ]}
        />

        <FooterColumn
          title="About"
          items={["Why Nmatrixpro", "Regulation", "Legal Docs", "Contact Us"]}
        />
      </div>

      {/* ───────── Bottom Section ───────── */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-xs leading-relaxed">
          {/* Disclaimer */}
          <div className="md:col-span-2">
            <p className="mb-4">
              Nmatrixpro is a global trading platform. Trading CFDs, Forex, and
              cryptocurrencies involves significant risk and may result in the
              loss of your invested capital.
            </p>
            <p>
              Ensure you fully understand the risks involved and seek
              independent advice if necessary.
            </p>
          </div>

          {/* Newsletter + Social */}
          <div>
            <p className="text-blue-400 mb-3 font-medium">
              Get the Freshest Nmatrixpro News
            </p>

            <div className="flex mb-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-[#121826] border border-gray-700 text-sm outline-none"
              />
              <button className="px-4 bg-blue-600 text-white">→</button>
            </div>

            <p className="mb-3 text-sm">Follow Us</p>
            <div className="flex gap-4 text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} Nmatrixpro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ───────── Reusable Column ───────── */
function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
