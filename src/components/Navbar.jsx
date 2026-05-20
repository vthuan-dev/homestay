import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import content from '../data/content.json'

const { nav, site } = content

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[#E8E0D0] ${scrolled ? 'bg-white shadow-md shadow-[#C9A84C]/10' : 'bg-white shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo.png" alt="Rose HomeStay Logo" className="h-10 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`px-3 py-2 text-xs font-medium rounded transition-colors duration-200 whitespace-nowrap ${
                  active === item.href
                    ? 'text-[#C9A84C]'
                    : 'text-[#1a1510] hover:text-[#C9A84C]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden lg:flex items-center gap-2 text-[#1a1510]">
            <Phone className="w-4 h-4 text-[#C9A84C]" />
            <span className="text-sm font-medium">{site.phone}</span>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E0D0] shadow-lg">
          {nav.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => { setActive(item.href); setMobileOpen(false) }}
              className="block px-6 py-3 text-sm text-[#1a1510] hover:text-[#C9A84C] hover:bg-[#f8f7f4] border-b border-[#E8E0D0]"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-2 px-6 py-3 text-[#1a1510]">
            <Phone className="w-4 h-4 text-[#C9A84C]" />
            <span className="text-sm">{site.phone}</span>
          </div>
        </div>
      )}
    </nav>
  )
}
