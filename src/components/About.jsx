import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { about } = content

export default function About() {
  return (
    <section id="about" className="py-16" style={{background:'#f8f7f4'}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-1" style={{color:'#1a1510'}}>
          {about.title}
        </h2>
        <OrnamentDivider />
        <p className="text-center text-sm max-w-2xl mx-auto mb-12 leading-relaxed mt-3" style={{color:'#888078'}}>
          {about.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{background:'#E8E0D0', border:'1px solid #E8E0D0'}}>
          {about.features.map((f, i) => (
            <div
              key={i}
              className="px-6 py-7 transition-colors duration-200 group" style={{background:'#ffffff'}} onMouseEnter={e=>e.currentTarget.style.background='#f8f7f4'} onMouseLeave={e=>e.currentTarget.style.background='#ffffff'}
            >
              <div className="text-3xl font-bold mb-4 leading-none" style={{color:'#EDD98A'}}>
                {f.num}
              </div>
              <div className="w-8 h-px mb-3" style={{background:'#C9A84C'}} />
              <h3 className="font-semibold text-sm mb-2" style={{color:'#1a1510'}}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{color:'#888078'}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
