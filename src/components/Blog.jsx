import content from '../data/content.json'
import OrnamentDivider from './OrnamentDivider'

const { blog } = content
const posts = blog.posts


export default function Blog() {
  return (
    <section id="blog" className="py-16" style={{background:'#ffffff'}}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold" style={{color:'#1a1510'}}>
              {blog.title}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <OrnamentDivider />
            </div>
            <p className="text-sm mt-1" style={{color:'#888078'}}>{blog.subtitle}</p>
          </div>
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-lg transition-colors" style={{color:'#C9A84C', border:'1px solid #EDD98A'}} onMouseEnter={e=>{e.currentTarget.style.color='#A0822A';e.currentTarget.style.borderColor='#C9A84C'}} onMouseLeave={e=>{e.currentTarget.style.color='#C9A84C';e.currentTarget.style.borderColor='#EDD98A'}}
          >
            {blog.viewAll}
          </a>
        </div>

        {/* Featured + List layout (top 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured large post */}
          <div className="md:col-span-2">
            <a href={posts[0].href} className="group block">
              <div className="overflow-hidden rounded-xl aspect-[16/9]">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{background:'#fefcf7', color:'#C9A84C'}}>
                    {posts[0].category}
                  </span>
                  <span className="text-xs text-gray-400">{posts[0].date}</span>
                </div>
                <h3 className="font-semibold text-lg leading-snug transition-colors mb-2" style={{color:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#1a1510'}>
                  {posts[0].title}
                </h3>
                <p className="text-sm line-clamp-2" style={{color:'#888078'}}>{posts[0].excerpt}</p>
              </div>
            </a>
          </div>

          {/* Side posts */}
          <div className="flex flex-col gap-5">
            {posts.slice(1, 4).map((post, i) => (
              <a key={i} href={post.href} className="group flex gap-3">
                <div className="w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-xs font-medium" style={{color:'#C9A84C'}}>{post.category}</span>
                    <span className="text-xs" style={{color:'#E8E0D0'}}>•</span>
                    <span className="text-xs" style={{color:'#888078'}}>{post.date}</span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2 transition-colors" style={{color:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#1a1510'}>
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {posts.slice(3).map((post, i) => (
            <a key={i} href={post.href} className="group block">
              <div className="overflow-hidden rounded-xl aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{background:'#fefcf7', color:'#C9A84C'}}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug transition-colors line-clamp-2" style={{color:'#1a1510'}} onMouseEnter={e=>e.currentTarget.style.color='#C9A84C'} onMouseLeave={e=>e.currentTarget.style.color='#1a1510'}>
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
