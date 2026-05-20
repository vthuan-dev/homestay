import content from '../data/content.json'

const { roomAmenities: data } = content
const roomFeatures = data.roomInfo.features
const amenities = data.amenities.items

export default function RoomAmenities() {
  return (
    <section id="room-info" className="py-16" style={{background:'#ffffff'}}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Room Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2" style={{color:'#1a1510'}}>{data.roomInfo.title}</h2>
            <div className="w-12 h-0.5 mb-5" style={{background:'#C9A84C'}} />
            <p className="text-sm leading-relaxed mb-5" style={{color:'#4a4040'}}>
              {data.roomInfo.desc1}{' '}
              <span className="font-medium" style={{color:'#C9A84C'}}>{data.roomInfo.highlight1}</span>{' '}
              {data.roomInfo.desc1end}
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{color:'#4a4040'}}>
              {data.roomInfo.desc2}{' '}
              <span className="font-medium" style={{color:'#C9A84C'}}>{data.roomInfo.highlight2}</span>{' '}
              {data.roomInfo.desc2end}
            </p>
            <ul className="space-y-2.5">
              {roomFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:'#C9A84C'}} />
                  <span style={{color:'#4a4040'}}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-xl font-semibold mb-2" style={{color:'#1a1510'}}>{data.amenities.title}</h2>
            <div className="w-12 h-0.5 mb-5" style={{background:'#C9A84C'}} />
            <p className="text-sm leading-relaxed mb-6" style={{color:'#4a4040'}}>
              {data.amenities.desc}{' '}
              <span className="font-medium" style={{color:'#C9A84C'}}>{data.amenities.highlight}</span>{' '}
              {data.amenities.descEnd}
            </p>

            <div className="flex flex-wrap gap-2">
              {amenities.map((a, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm rounded-full transition-colors duration-150 cursor-default" style={{color:'#4a4040', background:'#f8f7f4', border:'1px solid #E8E0D0'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='#C9A84C';e.currentTarget.style.color='#A0822A';e.currentTarget.style.background='#fefcf7'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='#E8E0D0';e.currentTarget.style.color='#4a4040';e.currentTarget.style.background='#f8f7f4'}}
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl" style={{background:'#fefcf7', border:'1px solid #E8E0D0'}}>
              <p className="text-sm leading-relaxed" style={{color:'#4a4040'}}>
                <span className="font-semibold" style={{color:'#C9A84C'}}>{data.amenities.noteLabel}</span>{' '}
                {data.amenities.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
