import { Phone, Check } from 'lucide-react'
import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { pricing } = content
const { plans } = pricing

export default function Pricing() {
  return (
    <section id="pricing" className="py-16" style={{background:'#f8f7f4'}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-1" style={{color:'#1a1510'}}>
          {pricing.title}
        </h2>
        <OrnamentDivider />
        <p className="text-center text-sm mb-10 mt-3" style={{color:'#888078'}}>
          {pricing.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 duration-300`}
              style={plan.highlight ? {background:'#111008', color:'white', outline:'2px solid #C9A84C', outlineOffset:'2px'} : {background:'#ffffff', color:'#1a1510', border:'1px solid #E8E0D0'}}
            >
              {/* Card Header */}
              <div className="px-6 pt-7 pb-5" style={plan.highlight ? {background:'#1a1510'} : {background:'#f8f7f4'}}>
                <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={plan.highlight ? {color:'#EDD98A'} : {color:'#C9A84C'}}>
                  {plan.period}
                </div>
                <div className="text-sm font-medium mb-1" style={plan.highlight ? {color:'#ffffff'} : {color:'#1a1510'}}>
                  {plan.type}
                </div>
                <div className="text-xs mb-4" style={plan.highlight ? {color:'#d4c8a0'} : {color:'#888078'}}>
                  {plan.subtitle}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold" style={plan.highlight ? {color:'white'} : {color:'#1a1510'}}>
                    {plan.price}
                  </span>
                  <span className="text-xs mb-1" style={plan.highlight ? {color:'#d4c8a0'} : {color:'#888078'}}>
                    {plan.unit}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5">
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={plan.highlight ? {color:'#EDD98A'} : {color:'#C9A84C'}} />
                      <span style={plan.highlight ? {color:'#d4c8a0'} : {color:'#4a4040'}}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hotline */}
                <a
                  href={`tel:${plan.hotline}`}
                  className="flex items-center gap-2 mb-4 text-sm font-medium"
                  style={plan.highlight ? {color:'#EDD98A'} : {color:'#C9A84C'}}
                >
                  <Phone className="w-4 h-4" />
                  {plan.hotline}
                </a>

                {/* Button */}
                <button className="w-full text-white font-semibold py-2.5 rounded transition-colors text-sm" style={{background:'#C9A84C'}} onMouseEnter={e=>e.currentTarget.style.background='#A0822A'} onMouseLeave={e=>e.currentTarget.style.background='#C9A84C'}>
                  {pricing.bookLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
