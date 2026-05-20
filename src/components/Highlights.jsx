import { Home, Users, BedDouble, Car } from 'lucide-react'
import content from '../data/content.json'

const { highlights } = content

const iconMap = {
  home: Home,
  users: Users,
  bed: BedDouble,
  car: Car,
}

export default function Highlights() {
  return (
    <section className="py-14" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Decorative top divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #E8E0D0)' }} />
          <a
            href="#room-info"
            className="text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-200 whitespace-nowrap"
            style={{ color: '#C9A84C', borderColor: '#E8E0D0', background: '#fefcf7' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.background = '#fdf8ec' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E0D0'; e.currentTarget.style.background = '#fefcf7' }}
          >
            {highlights.link}
          </a>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, #E8E0D0)' }} />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {highlights.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Home
            return (
              <div
                key={i}
                className="group rounded-2xl p-6 transition-all duration-300 cursor-default"
                style={{ background: '#ffffff', border: '1px solid #E8E0D0' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.10)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E0D0'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: item.iconBg }}
                >
                  <Icon className="w-7 h-7" style={{ color: item.iconColor }} strokeWidth={1.6} />
                </div>

                {/* Thin accent line */}
                <div className="w-8 h-0.5 mb-4 rounded-full transition-all duration-300 group-hover:w-12" style={{ background: item.iconColor, opacity: 0.5 }} />

                {/* Title */}
                <h3 className="font-semibold text-sm mb-2 leading-snug" style={{ color: '#1a1510' }}>
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-xs leading-relaxed" style={{ color: '#888078' }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
