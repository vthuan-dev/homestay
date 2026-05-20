import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { gallery } = content

export default function Gallery() {
  return (
    <section id="gallery" className="py-16" style={{background:'#ffffff'}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-1" style={{color:'#1a1510'}}>
          {gallery.title}
        </h2>
        <OrnamentDivider />
        <p className="text-center text-sm mb-8 max-w-xl mx-auto leading-relaxed mt-3" style={{color:'#888078'}}>
          {gallery.subtitle}
        </p>

        <div className="grid grid-cols-3 gap-3">
          {gallery.images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg group cursor-pointer aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
