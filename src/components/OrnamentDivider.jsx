export default function OrnamentDivider({ light = false }) {
  const lineColor = light ? 'rgba(255,255,255,0.4)' : '#C9A84C'
  const symbolColor = light ? 'rgba(255,255,255,0.7)' : '#C9A84C'
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="5" x2="48" y2="5" stroke={lineColor} strokeWidth="0.8"/>
        <polygon points="52,5 56,2 60,5 56,8" fill={lineColor}/>
      </svg>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 0 L8.2 5.8 L14 7 L8.2 8.2 L7 14 L5.8 8.2 L0 7 L5.8 5.8 Z" fill={symbolColor}/>
      </svg>
      <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,5 4,2 8,5 4,8" fill={lineColor}/>
        <line x1="12" y1="5" x2="60" y2="5" stroke={lineColor} strokeWidth="0.8"/>
      </svg>
    </div>
  )
}
