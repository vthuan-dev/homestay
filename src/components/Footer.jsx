import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from 'lucide-react'
import content from '../data/content.json'

const { footer, site } = content
const footerLinks = footer.links

export default function Footer() {
  return (
    <footer style={{background:'#111008', color:'#d4c8a0'}}>
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="mb-4">
              <img src="/logo.png" alt="Rose HomeStay Logo" className="h-14 w-auto object-contain brightness-200" />
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs" style={{color:'#9a9080'}}>
              {footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" style={{color:'#C9A84C'}} />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" style={{color:'#C9A84C'}} />
                <a href={`tel:${site.phoneRaw}`} className="transition-colors" style={{color:'#d4c8a0'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#d4c8a0'}>{site.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" style={{color:'#C9A84C'}} />
                <a href={`mailto:${site.email}`} className="transition-colors" style={{color:'#d4c8a0'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#d4c8a0'}>
                  {site.email}
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{background:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.background='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.background='#1a1510'}>
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{background:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.background='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.background='#1a1510'}>
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{background:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.background='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.background='#1a1510'}>
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4" style={{color:'#E8E0D0'}}>{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors" style={{color:'#6a6055'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#6a6055'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{borderTop:'1px solid #1a1510'}}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{color:'#7a5a44'}}>
          <span>{footer.copyright}</span>
          <div className="flex gap-4">
            {footer.bottomLinks.map(link => (
              <a key={link} href="#" className="transition-colors" style={{color:'#7a5a44'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#7a5a44'}>{link}</a>
            ))}
            <a href="#" className="transition-colors" style={{color:'#7a5a44'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#7a5a44'}>
              Powered by{' '}
              <span style={{color:'#C9A84C'}}>{footer.poweredBy}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
