import { useState } from 'react';
import { Page } from '../App';
import { MapPin, List } from 'lucide-react';

interface MapPageProps {
  onNavigate: (page: Page) => void;
}

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
  type: string;
}

export function MapPage({ onNavigate }: MapPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locations] = useState<Location[]>([
    { id: 1, name: 'Vinarium Wine Bar', lat: 45.7537, lng: 21.2257, type: 'wine' },
    { id: 2, name: 'Casa Bunicii', lat: 45.7570, lng: 21.2290, type: 'restaurant' },
    { id: 3, name: 'D\'Arc Restaurant', lat: 45.7489, lng: 21.2087, type: 'restaurant' },
    { id: 4, name: 'Scârț Loc Lejer', lat: 45.7561, lng: 21.2269, type: 'bar' },
    { id: 5, name: 'Teatro Restaurant', lat: 45.7575, lng: 21.2301, type: 'fine-dining' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-8 z-50 bg-teal-400 hover:bg-teal-500 text-white px-6 py-3 rounded-full transition-colors shadow-lg"
      >
        Menu
      </button>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-indigo-500/95 z-40 flex items-center justify-center">
          <nav className="flex flex-col items-center gap-6">
            <button
              onClick={() => {
                onNavigate('home');
                setIsMenuOpen(false);
              }}
              className="text-6xl text-white hover:text-yellow-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setIsMenuOpen(false);
              }}
              className="text-6xl text-white hover:text-yellow-300 transition-colors"
            >
              About us
            </button>
            <button
              onClick={() => {
                onNavigate('spots');
                setIsMenuOpen(false);
              }}
              className="text-6xl text-white hover:text-yellow-300 transition-colors"
            >
              Best spots
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-6xl text-yellow-300 hover:text-white transition-colors"
            >
              Map
            </button>
          </nav>
        </div>
      )}

      {/* Filter and View Controls */}
      <div className="container mx-auto px-8 pt-8 flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors shadow-lg">
            Filter by desire, type, price...
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onNavigate('spots')}
            className="p-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            <List className="w-5 h-5" />
          </button>
          <button className="p-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="container mx-auto px-8 py-8">
        <div className="relative w-full h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Embedded Map using OpenStreetMap */}
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=21.1687%2C45.7236%2C21.2887%2C45.7836&layer=mapnik&marker=45.7537%2C21.2287"
            className="w-full h-full"
            style={{ border: 0 }}
            title="Timisoara Map"
          />
          
          {/* Custom Markers Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* This would be replaced with actual interactive markers in a real implementation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg pointer-events-auto">
                📍 {locations.length} locations in Timisoara
              </div>
            </div>
          </div>

          {/* Attribution */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs text-gray-600">
            © OpenStreetMap contributors
          </div>
        </div>

        {/* Location Legend */}
        <div className="mt-6 bg-white rounded-3xl shadow-lg p-6">
          <h3 className="text-2xl text-gray-800 mb-4">Locations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer"
              >
                <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                <div>
                  <p className="text-gray-800">{location.name}</p>
                  <p className="text-sm text-gray-500">{location.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
