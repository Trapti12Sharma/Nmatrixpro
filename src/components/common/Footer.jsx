import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Send, Mail } from "lucide-react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaCcStripe,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1119] text-gray-300 text-sm">
      {/* ================= PAYMENT METHODS ================= */}
      <div className="border-b border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-400 mb-6">Payment Methods</p>

          <div className="flex flex-wrap justify-center items-center gap-8 text-3xl text-gray-400">
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
            <FaCcStripe />
          </div>
        </div>
      </div>

      {/* ================= LINKS ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
        <div>
          <h4 className="text-white font-semibold mb-4">Forex Trading</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/products/forex/what-is-forex">What is Forex</Link>
            </li>
            <li>
              <Link to="/products/forex/how-to-trade-forex">
                How to Trade Forex
              </Link>
            </li>
            <li>
              <Link to="/products/forex/vanilla-options">Vanilla Options</Link>
            </li>
            <li>
              <Link to="/trading-platforms/webtrader">Trading Platforms</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">CFD Trading</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/products/cfd/what-are-cfds">What are CFDs</Link>
            </li>
            <li>
              <Link to="/products/cfd/bonds-treasuries">
                Bonds & Treasuries
              </Link>
            </li>
            <li>
              <Link to="/products/cfd/etfs">ETFs Trading</Link>
            </li>
            <li>
              <Link to="/products/commodities">Commodities Trading</Link>
            </li>
            <li>
              <Link to="/products/indices">Indices Trading</Link>
            </li>
            <li>
              <Link to="/products/stocks">Stock Trading</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Trading Info</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/trading-info">Financial Instruments</Link>
            </li>
            <li>
              <Link to="/trading-info">Trading Central</Link>
            </li>
            <li>
              <Link to="/trading-info">Economic Calendar</Link>
            </li>
            <li>
              <Link to="/trading-info">Trading Calculator</Link>
            </li>
            <li>
              <Link to="/trading-info">Market Analysis</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Trading Platforms</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/trading-platforms/metatrader-4">MetaTrader 4</Link>
            </li>
            <li>
              <Link to="/trading-platforms/metatrader-5">MetaTrader 5</Link>
            </li>
            <li>
              <Link to="/trading-platforms/ava-social">AvaSocial</Link>
            </li>
            <li>
              <Link to="/trading-platforms/duplitrade">DupliTrade</Link>
            </li>
            <li>
              <Link to="/trading-platforms/vps">VPS</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about">Why NMATRIXPRO?</Link>
            </li>
            <li>
              <Link to="/about">Regulation</Link>
            </li>
            <li>
              <Link to="/about">Legal Documents</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/cookies-policy">Cookies Policy</Link>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:nmatrixpro@gmail.com">nmatrixpro@gmail.com</a>
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER + SOCIAL ================= */}
      <div className="border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h4 className="text-blue-400 mb-3">
              Get the Freshest NMATRIXPRO News
            </h4>
            <div className="flex border border-gray-600 rounded overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 w-full outline-none"
              />
              <button className="bg-blue-600 px-4">
                <Send size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <p className="text-blue-400">Follow Us</p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61585220896384"
                target="_blank"
              >
                <Facebook />
              </a>
              <a href="https://www.instagram.com/nmatrixpro/" target="_blank">
                <Instagram />
              </a>
              <a href="https://x.com/nmatrixpro" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className="bg-black py-10">
        <div className="max-w-7xl mx-auto px-6 text-xs text-gray-400 leading-relaxed">
          <p className="mb-4">
            Trading CFDs, Forex and derivatives involves significant risk and
            may not be suitable for all investors. Ensure you understand the
            risks involved before trading.
          </p>

          <p className="text-center mt-6">
            © 2025 NMATRIXPRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
