import { HeroSection } from "./components/hero-section"
import { SearchButton } from "./components/search-button"
import { SiteHeader } from "./components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-red-950 text-white overflow-hidden relative">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>

      {/* Main content container */}
      <div className="relative z-20">
        <SiteHeader />
        <HeroSection />
      </div>

      <SearchButton />
    </div>
  )
}
