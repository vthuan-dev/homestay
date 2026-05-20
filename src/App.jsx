import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Highlights from './components/Highlights'
import Gallery from './components/Gallery'
import RoomAmenities from './components/RoomAmenities'
import Pricing from './components/Pricing'
import BookingCalendar from './components/BookingCalendar'
import Reviews from './components/Reviews'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Gallery />
      <RoomAmenities />
      <Pricing />
      <BookingCalendar />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
