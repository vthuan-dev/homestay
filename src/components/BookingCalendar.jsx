import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { booking } = content

const DAYS = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']
const MONTHS = [
  'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4',
  'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8',
  'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
]

// Sample booked dates (day numbers)
const bookedDates = [3, 4, 5, 12, 13, 14, 21, 22]
const bookedDates2 = [6, 7, 8, 15, 16, 27, 28, 29]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  let day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

function CalendarMonth({ year, month, bookedDays }) {
  const totalDays = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const cells = []

  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= totalDays; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div className="flex-1 min-w-0">
      <h3 className="text-center font-semibold text-gray-700 mb-4 text-sm">
        {MONTHS[month]} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-xs font-semibold text-gray-400 py-1">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => (
          <div
            key={i}
            className={`h-8 flex items-center justify-center text-xs rounded-full ${
              day === null ? '' : bookedDays.includes(day)
                ? 'font-medium'
                : 'cursor-pointer'
            }`}
            style={day !== null ? (bookedDays.includes(day) ? {background:'#C9A84C', color:'white'} : {color:'#1a1510'}) : {}}
            onMouseEnter={e => { if (day && !bookedDays.includes(day)) e.currentTarget.style.background='#f8f7f4' }}
            onMouseLeave={e => { if (day && !bookedDays.includes(day)) e.currentTarget.style.background='' }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BookingCalendar() {
  const today = new Date()
  const [baseYear, setBaseYear] = useState(today.getFullYear())
  const [baseMonth, setBaseMonth] = useState(today.getMonth())

  const nextMonth = baseMonth === 11 ? 0 : baseMonth + 1
  const nextYear = baseMonth === 11 ? baseYear + 1 : baseYear

  const prev = () => {
    if (baseMonth === 0) { setBaseMonth(11); setBaseYear(y => y - 1) }
    else setBaseMonth(m => m - 1)
  }
  const next = () => {
    if (baseMonth === 11) { setBaseMonth(0); setBaseYear(y => y + 1) }
    else setBaseMonth(m => m + 1)
  }

  return (
    <section id="booking" className="py-16" style={{background:'#ffffff'}}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-1" style={{color:'#1a1510'}}>
          {booking.title}
        </h2>
        <OrnamentDivider />
        <p className="text-center text-sm mb-8 mt-2" style={{color:'#888078'}}>
          {booking.subtitle}
        </p>
        <div className="rounded-2xl shadow-sm p-6" style={{background:'#ffffff', border:'1px solid #E8E0D0'}}>
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mb-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full" style={{background:'#C9A84C'}} />
              <span>{booking.legendBooked}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-100 border border-gray-200" />
              <span>{booking.legendAvailable}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={prev} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
            <div className="flex gap-8 flex-1 mx-4">
              <CalendarMonth year={baseYear} month={baseMonth} bookedDays={bookedDates} />
              <CalendarMonth year={nextYear} month={nextMonth} bookedDays={bookedDates2} />
            </div>
            <button onClick={next} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
