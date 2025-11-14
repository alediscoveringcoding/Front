import { Page } from '../App';
import { useState } from 'react';
import { MapPin, Wine, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCFAF5' }}>
      {/* Elegant Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #FF2E1E 0%, #FC87F6 50%, #7C80F6 100%)'
        }} />
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/3" style={{ backgroundColor: '#FBED4F' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3" style={{ backgroundColor: '#4AA5FF' }} />

        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-8">
          <div className="text-white text-4xl md:text-5xl tracking-tight" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Le OFF
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white/20 transition-all"
          >
            Menu
          </button>
        </header>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(124, 128, 246, 0.98)' }}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/70 hover:text-white text-4xl transition-colors"
            >
              ×
            </button>
            <nav className="flex flex-col items-center gap-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl md:text-6xl transition-colors hover:opacity-80"
                style={{ color: '#FBED4F' }}
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className="text-5xl md:text-6xl text-white transition-colors hover:opacity-80"
              >
                About
              </button>
              <button
                onClick={() => {
                  onNavigate('spots');
                  setIsMenuOpen(false);
                }}
                className="text-5xl md:text-6xl text-white transition-colors hover:opacity-80"
              >
                Best Spots
              </button>
              <button
                onClick={() => {
                  onNavigate('map');
                  setIsMenuOpen(false);
                }}
                className="text-5xl md:text-6xl text-white transition-colors hover:opacity-80"
              >
                Map
              </button>
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className="text-5xl md:text-6xl text-white transition-colors hover:opacity-80"
              >
                Contact
              </button>
            </nav>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-5xl">
            <div className="mb-6 inline-block">
              <span className="text-lg md:text-xl tracking-widest uppercase" style={{ color: '#FBED4F' }}>Timișoara 2025</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight" style={{ lineHeight: '1.1' }}>
              Discover the<br />
              <span style={{ color: '#FBED4F' }}>best dining</span><br />
              experiences
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Your curated guide to 100+ exceptional restaurants, wine bars, and culinary destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('spots')}
                className="group px-10 py-5 rounded-full transition-all shadow-2xl inline-flex items-center justify-center gap-3 text-lg"
                style={{ backgroundColor: '#FCFAF5', color: '#FF2E1E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FBED4F';
                  e.currentTarget.style.color = '#1F2937';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FCFAF5';
                  e.currentTarget.style.color = '#FF2E1E';
                }}
              >
                Explore Spots
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('map')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full hover:bg-white/20 transition-all text-lg"
              >
                View Map
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1666032119084-82351976a922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjMxMzY5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Elegant dining"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Wine className="w-8 h-8 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-3">Curated Selection</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every restaurant handpicked by our expert committee for exceptional quality and authenticity
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5lJTIwZ2xhc3Nlc3xlbnwxfHx8fDE3NjMxMzY5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wine selection"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Sparkles className="w-8 h-8 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-3">Wine & Spirits</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover the finest wine bars and spirits destinations across Timișoara
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1651209315802-12190ccfee26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwdGFibGV8ZW58MXx8fHwxNzYzMDQwNzE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fine dining"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <MapPin className="w-8 h-8 mb-2" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-3">Interactive Map</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Navigate the city with ease using our comprehensive restaurant map
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #5ECCAD 0%, #4AA5FF 100%)'
      }}>
        <div className="absolute inset-0 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#7C80F6' }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-4xl md:text-6xl mb-6 leading-tight">
              100+ handpicked addresses waiting to be discovered
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-10 leading-relaxed">
              For over 10 years, Le OFF has been the trusted guide for food and wine enthusiasts
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="px-10 py-5 rounded-full transition-all shadow-2xl text-lg inline-flex items-center gap-3"
              style={{ backgroundColor: '#FCFAF5', color: '#4AA5FF' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FBED4F';
                e.currentTarget.style.color = '#1F2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FCFAF5';
                e.currentTarget.style.color = '#4AA5FF';
              }}
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 md:py-20 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #FC87F6 0%, #FF2E1E 100%)'
      }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 opacity-30" style={{ backgroundColor: '#FBED4F' }} />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
              Le OFF is an initiative by Vinexposium, bringing together quality, authenticity, 
              and innovation in Timișoara's culinary scene
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white transition-all text-lg"
              style={{}}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FCFAF5';
                e.currentTarget.style.color = '#FC87F6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = 'white';
              }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}