import { useState } from 'react'
import { Calendar, Users, ChevronDown, Search } from 'lucide-react'
import content from '../data/content.json'

const { hero, site } = content

export default function Hero() {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2 khách')
  const [roomType, setRoomType] = useState('Toàn bộ homestay')

  return (
    <section id="home" className="relative">
      {/* Hero Image */}
      <div className="relative h-[85vh] min-h-[550px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
          alt="Rose HomeStay"
          className="w-full h-full object-cover object-center"
        />
        {/* Elegant overlay */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, rgba(10,8,5,0.45) 0%, rgba(10,8,5,0.25) 60%, rgba(10,8,5,0.55) 100%)'}} />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-[#EDD98A]/70" />
            <span className="text-[#EDD98A] text-xs tracking-[0.3em] uppercase">{hero.badge}</span>
            <div className="h-px w-10 bg-[#EDD98A]/70" />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white mb-4 lg:text-5xl xl:text-6xl" style={{ fontFamily: "'Playpen Sans', 'Baloo 2', cursive" }}>
            {hero.title}
          </h1>
          <p
            className="text-white/90 text-base md:text-lg max-w-2xl leading-loose mb-8 font-light tracking-wide"
            style={{ fontFamily: "'Playpen Sans', 'Baloo 2', cursive" }}
          >
            {hero.subtitle}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-blue-600 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-sky-500 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-red-500 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.941z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Booking Bar */}
      <div className="bg-white shadow-lg border-t border-[#E8E0D0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center divide-x divide-[#E8E0D0]">
            {/* Check-in */}
            <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[160px]">
              <Calendar className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs text-[#888078] mb-0.5">{hero.checkinLabel}</div>
                <input
                  type="date"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                  className="text-sm text-[#1a1510] font-medium w-full outline-none cursor-pointer bg-transparent"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[160px]">
              <Calendar className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs text-[#888078] mb-0.5">{hero.checkoutLabel}</div>
                <input
                  type="date"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                  className="text-sm text-[#1a1510] font-medium w-full outline-none cursor-pointer bg-transparent"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[140px]">
              <Users className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs text-[#888078] mb-0.5">{hero.guestsLabel}</div>
                <select
                  value={guests}
                  onChange={e => setGuests(e.target.value)}
                  className="text-sm text-[#1a1510] font-medium w-full outline-none bg-transparent cursor-pointer"
                >
                  {hero.guestOptions.map(n => (
                    <option key={n} value={`${n} khách`}>{n} khách</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Room type */}
            <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[160px]">
              <ChevronDown className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
              <div className="flex-1">
                <div className="text-xs text-[#888078] mb-0.5">{hero.roomTypeLabel}</div>
                <select
                  value={roomType}
                  onChange={e => setRoomType(e.target.value)}
                  className="text-sm text-[#1a1510] font-medium w-full outline-none bg-transparent cursor-pointer"
                >
                  {hero.roomTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Button */}
            <div className="px-4 py-3">
              <button className="text-white font-semibold px-7 py-3 rounded flex items-center gap-2 transition-colors whitespace-nowrap" style={{background:'#16a34a'}} onMouseEnter={e=>e.currentTarget.style.background='#15803d'} onMouseLeave={e=>e.currentTarget.style.background='#16a34a'}>
                <Search className="w-4 h-4" />
                {hero.bookBtnLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
