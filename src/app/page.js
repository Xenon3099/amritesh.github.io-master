import Image from 'next/image'
import HeroSection from './Components/HeroSection'
import NavBar from './Components/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className='container mx-auto px-12 py-4'>
      <HeroSection/>
      </div>
    </main>
  )
}
