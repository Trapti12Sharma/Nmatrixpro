import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "./menuData";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b sticky top-0 z-[9999]" ref={navRef}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl text-blue-700">
          NMATRIXPRO
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {Object.keys(menuData).map((menu) => (
            <div
              key={menu}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu)}
            >
              <Link
                to={getTopRoute(menu)}
                className={`pb-2 inline-block ${
                  openMenu === menu
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {menu}
              </Link>

              {openMenu === menu && (
                <MegaDropdown menu={menu} data={menuData[menu]} />
              )}
            </div>
          ))}

          <Link to="/education" className="hover:text-blue-600">
            Education
          </Link>
          <Link to="/partners" className="hover:text-blue-600">
            Partners
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex gap-4">
          <Link to="/login" className="text-orange-600">
            Login
          </Link>
          <Link to="/register" className="bg-orange-500 text-white px-4 py-2">
            Register Now
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ───────── Mega Dropdown ───────── */
function MegaDropdown({ menu, data }) {
  return (
    <div className="fixed left-0 right-0 top-[80px] bg-white border-t shadow-xl z-[9999]">
      <div className="max-w-7xl mx-auto px-10 py-10">
        {/* SCROLL SAFE CONTAINER */}
        <div className="max-h-[70vh] overflow-y-auto">
          {/* RESPONSIVE AUTO GRID */}
          <div
            className="grid gap-12 text-sm 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5"
          >
            {data.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-gray-600">
                  {section.items.map((item, i) => (
                    <li key={i} className="hover:text-blue-600 cursor-pointer">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── ROUTE HELPERS ───────── */
function getTopRoute(menu) {
  if (menu === "Products") return "/trading/forex";
  if (menu === "Trading Platforms") return "/platforms/webtrader";
  if (menu === "Trading Info") return "/trading-info";
  return "/";
}

function getItemRoute(menu, section, item) {
  if (menu === "Products") {
    if (section.includes("Forex")) return "/trading/forex";
    if (section.includes("CFD")) return "/trading/cfd";
    if (section.includes("Stock")) return "/trading/stocks";
    if (section.includes("Commodities")) return "/trading/commodities";
    if (section.includes("Indices")) return "/trading/indices";
    if (section.includes("Futures")) return "/trading/futures";
  }

  if (menu === "Trading Platforms") {
    if (item.includes("Web")) return "/platforms/webtrader";
    if (item.includes("MetaTrader 4")) return "/platforms/mt4";
    if (item.includes("MetaTrader 5")) return "/platforms/mt5";
  }

  if (menu === "Trading Info") {
    return "/trading-info";
  }

  return "/";
}
