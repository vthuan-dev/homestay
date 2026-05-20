import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { reviews } = content
const reviewers = reviews.items

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? '' : 'text-gray-200'}`}
          style={i < count ? {color:'#C9A84C'} : {}}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 relative overflow-hidden" style={{background:'#f8f7f4'}}>
      {/* Decorative blobs */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(201,168,76,0.08)'}} />
      <div className="absolute -right-16 top-1/3 w-48 h-48 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(201,168,76,0.10)'}} />

      <div className="max-w-6xl mx-auto px-4 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1" style={{color:'#1a1510'}}>{reviews.title}</h2>
        <OrnamentDivider />
        <p className="text-center text-sm mb-8 mt-2" style={{color:'#888078'}}>{reviews.subtitle}</p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 mb-10">
          <div className="text-center">
            <div className="text-xl font-bold" style={{color:'#1a1510'}}>{reviews.statsGuests}</div>
            <div className="text-xs" style={{color:'#888078'}}>{reviews.statsGuestsLabel}</div>
          </div>
          <div className="w-px h-12" style={{background:'#E8E0D0'}} />
          <div className="text-center">
            <div className="text-xl font-bold" style={{color:'#1a1510'}}>{reviews.statsRating}</div>
            <div className="flex justify-center mt-1">
              <StarRating count={5} />
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviewers.map((r, i) => (
            <div key={i} className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300" style={{background:'#ffffff', border:'1px solid #E8E0D0'}}>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm" style={{color:'#1a1510'}}>{r.name}</div>
                  <div className="text-xs" style={{color:'#888078'}}>{r.role}</div>
                </div>
              </div>
              <StarRating count={r.rating} />
              <p className="mt-3 text-sm leading-relaxed" style={{color:'#4a4040'}}>{r.text}</p>
              <div className="mt-4 text-xs" style={{color:'#aaa090'}}>{r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
