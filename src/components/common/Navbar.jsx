import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function NavMenu({ title, children }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* TOP NAV ITEM */}
      <span className="px-4 h-20 flex items-center cursor-pointer whitespace-nowrap text-gray-800 hover:text-blue-600 transition">
        {title}
      </span>

      {/* FULL WIDTH DROPDOWN */}
      {open && (
        <div
          ref={menuRef}
          className="fixed left-0 top-20 w-screen bg-white border-t shadow-lg z-[9998]"
        >
          <div className="max-w-7xl mx-auto px-10 py-10">
            <div className="grid grid-cols-5 gap-14 text-sm">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 whitespace-nowrap"
      >
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // "products" | "platforms"

  const productsRef = useRef(null);
  const platformsRef = useRef(null);

  // ✅ Close menu ONLY when cursor goes BELOW active submenu
  useEffect(() => {
    function handleMouseMove(e) {
      let ref = null;

      if (activeMenu === "products") ref = productsRef;
      if (activeMenu === "platforms") ref = platformsRef;

      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();

      if (e.clientY > rect.bottom) {
        setActiveMenu(null);
      }
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [activeMenu]);

  return (
    <header className="bg-white border-b sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/Nmatrix-logo.jpeg"
              alt="NMATRIXPRO"
              className="h-15 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center h-20 gap-2 text-sm font-medium">
            {/* ================= PRODUCTS ================= */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("products")}
            >
              <span className="px-4 h-20 flex items-center cursor-pointer whitespace-nowrap text-blue-600">
                Products
              </span>

              {activeMenu === "products" && (
                <div
                  ref={productsRef}
                  className="fixed left-0 top-20 w-screen bg-white border-t shadow-lg"
                >
                  <div className="max-w-7xl mx-auto px-10 py-10">
                    <div className="grid grid-cols-5 gap-14 text-sm">
                      <div>
                        <p className="font-semibold mb-4">Forex Trading</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/products/forex/what-is-forex">
                              What is Forex
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/forex/how-to-trade-forex">
                              How to Trade Forex
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/forex/vanilla-options">
                              Vanilla Options
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-4">CFD Trading</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/products/cfd/what-are-cfds">
                              What are CFDs
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/cfd/how-to-trade-cfds">
                              How to Trade CFDs
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/cfd/bonds-treasuries">
                              Bonds & Treasuries
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/cfd/etfs">ETFs Trading</Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-4">Stock Trading</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/products/stocks/what-are-stocks">
                              What are Stocks
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/stocks/how-to-trade-stocks">
                              How to Trade Stocks
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-4">Commodities</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/products/commodities/how-to-trade-commodities">
                              How to Trade Commodities
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/commodities/how-to-trade-gold">
                              How to Trade Gold
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/commodities/how-to-trade-oil">
                              How to Trade Oil
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold mb-4">Indices</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/products/indices/what-are-indices">
                              What Are Indices
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/indices/how-to-trade-indices">
                              How to Trade Indices
                            </Link>
                          </li>
                          <li>
                            <Link to="/products/indices/vix-index">
                              VIX Index
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ================= TRADING PLATFORMS ================= */}
            {/* ================= TRADING PLATFORMS ================= */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("platforms")}
            >
              <span className="px-4 h-20 flex items-center cursor-pointer whitespace-nowrap hover:text-blue-600">
                Trading Platforms
              </span>

              {activeMenu === "platforms" && (
                <div
                  ref={platformsRef}
                  className="fixed left-0 top-20 w-screen bg-white border-t shadow-lg"
                >
                  <div className="max-w-7xl mx-auto px-10 py-10">
                    <div className="grid grid-cols-4 gap-14 text-sm">
                      {/* WebTrader */}
                      <div>
                        <p className="font-semibold mb-4">WebTrader</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/trading-platforms/webtrader">
                              WebTrader
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/avaoptions">
                              AvaOptions
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/avatrade-app">
                              AvaTrade App
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/mac-trading">
                              Mac Trading
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* MetaTrader 4 */}
                      <div>
                        <p className="font-semibold mb-4">MetaTrader 4</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/trading-platforms/what-is-metatrader">
                              What is MetaTrader
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/guardian-angel">
                              Guardian Angel
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/expert-advisors">
                              Expert Advisors
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/vps">VPS</Link>
                          </li>
                        </ul>
                      </div>

                      {/* MetaTrader 5 */}
                      <div>
                        <p className="font-semibold mb-4">MetaTrader 5</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/trading-platforms/metatrader-5">
                              MetaTrader 5
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/how-to-trade-mt5">
                              How to Trade with MT5
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/algorithmic-trading-mt5">
                              Algorithmic Trading
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Automated Trading */}
                      <div>
                        <p className="font-semibold mb-4">Automated Trading</p>
                        <ul className="space-y-3 text-gray-600">
                          <li>
                            <Link to="/trading-platforms/ava-social">
                              AvaSocial
                            </Link>
                          </li>
                          <li>
                            <Link to="/trading-platforms/duplitrade">
                              DupliTrade
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ================= ACCOUNT TYPES ================= */}
            <NavMenu title="Account Types">
              <div>
                <p className="font-semibold mb-4">Accounts</p>
                <ul className="space-y-3 text-gray-600">
                  <NavLink to="/accounts/standard">Standard Account</NavLink>
                  <NavLink to="/accounts/micro">Micro Account</NavLink>
                  <NavLink to="/accounts/vip">VIP Account</NavLink>
                  <NavLink to="/accounts/live">Live Account</NavLink>
                  <NavLink to="/accounts/demo">Demo Account</NavLink>
                  <NavLink to="/accounts/topups">Topups</NavLink>
                </ul>
              </div>
            </NavMenu>

            {/* ================= TRADING TOOLS ================= */}
            <NavMenu title="Trading Tools">
              <div>
                <p className="font-semibold mb-4">Tools</p>
                <ul className="space-y-3 text-gray-600">
                  <NavLink to="/tools/advanced-charts">Advanced Charts</NavLink>
                  <NavLink to="/tools/copy-trading">Copy Trading</NavLink>
                  <NavLink to="/tools/mam">MAM</NavLink>
                  <NavLink to="/tools/pamm">PAMM</NavLink>
                </ul>
              </div>
            </NavMenu>

            {/* ================= FUNDS MANAGEMENT ================= */}
            <NavMenu title="Funds Management">
              <div>
                <p className="font-semibold mb-4">Funds</p>
                <ul className="space-y-3 text-gray-600">
                  <NavLink to="/funds/deposit">Deposit</NavLink>
                  <NavLink to="/funds/withdrawal">Withdrawal</NavLink>
                  <NavLink to="/funds/internal-transfer">
                    Internal Transfer
                  </NavLink>
                  <NavLink to="/funds/deposit-history">Deposit History</NavLink>
                  <NavLink to="/funds/withdrawal-history">
                    Withdrawal History
                  </NavLink>
                </ul>
              </div>
            </NavMenu>

            {/* ================= SUPPORT & LEARN ================= */}
            <NavMenu title="Support & Learn">
              <div>
                <p className="font-semibold mb-4">Support</p>
                <ul className="space-y-3 text-gray-600">
                  <NavLink to="/support/helpdesk">Helpdesk</NavLink>
                  <NavLink to="/contact">Contact Us</NavLink>
                  <NavLink to="/feedback">Leave a Feedback</NavLink>
                  <NavLink to="/download-app">Download App</NavLink>
                  <NavLink to="/blogs">Blogs</NavLink>
                </ul>
              </div>
            </NavMenu>
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-6">
            <Search size={18} />
            <Link to="/login" className="text-orange-600">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-orange-500 text-white px-5 py-2 rounded"
            >
              Register Now
            </Link>
          </div>

          {/* MOBILE */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
