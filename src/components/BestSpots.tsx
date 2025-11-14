import { useState } from 'react';
import { motion } from 'motion/react';
import { Page } from '../App';
import { List, MapPin, Plus, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BestSpotsProps {
  onNavigate: (page: Page) => void;
}

interface Spot {
  id: number;
  name: string;
  image: string;
  rating: string;
  description: string;
}

export function BestSpots({ onNavigate }: BestSpotsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [spots, setSpots] = useState<Spot[]>([
    {
      id: 1,
      name: 'Casa del Sole Trattorria',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      rating: '10/10',
      description: 'Authentic Italian cuisine in the heart of Timisoara'
    },
    {
      id: 2,
      name: 'La Passerelle',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      rating: '9.5/10',
      description: 'French bistro with riverside views'
    },
    {
      id: 3,
      name: 'Cultura',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      rating: '9/10',
      description: 'Modern European cuisine meets tradition'
    },
    {
      id: 4,
      name: 'Bellini',
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop',
      rating: '9/10',
      description: 'Contemporary dining experience'
    },
    {
      id: 5,
      name: 'Ghiroc d\'Or',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      rating: '8.5/10',
      description: 'Local specialties with a modern twist'
    },
    {
      id: 6,
      name: 'Brasserie Intemporà',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop',
      rating: '9.5/10',
      description: 'Classic brasserie atmosphere'
    },
    {
      id: 7,
      name: 'Llorabar',
      image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=400&fit=crop',
      rating: '8/10',
      description: 'Cocktail bar with creative drinks'
    },
    {
      id: 8,
      name: 'Cuisine Vis',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop',
      rating: '9/10',
      description: 'Open kitchen concept restaurant'
    },
    {
      id: 9,
      name: 'Carilla',
      image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600&h=400&fit=crop',
      rating: '8.5/10',
      description: 'Cozy neighborhood favorite'
    },
    {
      id: 10,
      name: 'Oktobris',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
      rating: '8/10',
      description: 'German-inspired beer garden'
    },
    {
      id: 11,
      name: 'ELS',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      rating: '9/10',
      description: 'Contemporary fine dining'
    },
    {
      id: 12,
      name: 'Le Grand Pan',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
      rating: '9.5/10',
      description: 'Meat-focused fine dining experience'
    },
    {
      id: 13,
      name: 'Simone',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&h=400&fit=crop',
      rating: '8/10',
      description: 'Intimate wine bar'
    },
    {
      id: 14,
      name: 'Champeval',
      image: 'https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?w=600&h=400&fit=crop',
      rating: '9/10',
      description: 'Natural wine selection'
    },
    {
      id: 15,
      name: 'Osotine',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop',
      rating: '9.5/10',
      description: 'Seasonal tasting menu'
    },
    {
      id: 16,
      name: 'Silvius',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=400&fit=crop',
      rating: '8.5/10',
      description: 'Traditional Romanian flavors'
    },
  ]);
  const [isAddingSpot, setIsAddingSpot] = useState(false);
  const [newSpot, setNewSpot] = useState({ name: '', image: '', rating: '', description: '' });

  const handleAddSpot = () => {
    if (newSpot.name && newSpot.image && newSpot.rating && newSpot.description) {
      setSpots([...spots, { ...newSpot, id: spots.length + 1 }]);
      setNewSpot({ name: '', image: '', rating: '', description: '' });
      setIsAddingSpot(false);
    }
  };

  const handleDeleteSpot = (id: number) => {
    setSpots(spots.filter(spot => spot.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with curved image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0" style={{
          clipPath: 'ellipse(80% 100% at 50% 0%)'
        }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&h=400&fit=crop"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Logo and Menu */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="text-teal-400 text-5xl" style={{ fontFamily: 'system-ui, sans-serif' }}>
          off
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        >
          Menu
        </button>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-indigo-500/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-8 text-white text-xl hover:text-yellow-300"
          >
            ✕
          </button>
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
              About
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-6xl text-yellow-300 hover:text-white transition-colors"
            >
              Best spots
            </button>
            <button
              onClick={() => {
                onNavigate('map');
                setIsMenuOpen(false);
              }}
              className="text-6xl text-white hover:text-yellow-300 transition-colors"
            >
              Map
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setIsMenuOpen(false);
              }}
              className="text-6xl text-white hover:text-yellow-300 transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      {/* Title */}
      <div className="text-center -mt-20 relative z-10 mb-12">
        <h1 className="text-8xl md:text-9xl text-teal-400">Best</h1>
        <h1 className="text-8xl md:text-9xl text-teal-400 -mt-8">spots</h1>
      </div>

      {/* Filter and View Controls */}
      <div className="container mx-auto px-8 mb-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-2">
          <button className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">
            Filter by desire, type, price...
          </button>
          <button className="px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            Takeaway
          </button>
          <button className="px-6 py-2 border-2 border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
            Terrasse
          </button>
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors">
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('map')}
            className="p-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            <MapPin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Add Spot Button */}
      <div className="container mx-auto px-8 mb-8">
        <button
          onClick={() => setIsAddingSpot(!isAddingSpot)}
          className="flex items-center gap-2 px-4 py-2 bg-teal-400 text-white rounded-full hover:bg-teal-500 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add New Spot
        </button>
      </div>

      {/* Add Spot Form */}
      {isAddingSpot && (
        <div className="container mx-auto px-8 mb-8 max-w-2xl">
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl text-gray-800">Add New Spot</h3>
              <button onClick={() => setIsAddingSpot(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newSpot.name}
                onChange={(e) => setNewSpot({ ...newSpot, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newSpot.image}
                onChange={(e) => setNewSpot({ ...newSpot, image: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
              <input
                type="text"
                placeholder="Rating (e.g., 9/10)"
                value={newSpot.rating}
                onChange={(e) => setNewSpot({ ...newSpot, rating: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Description"
                value={newSpot.description}
                onChange={(e) => setNewSpot({ ...newSpot, description: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg min-h-[100px]"
              />
              <button
                onClick={handleAddSpot}
                className="w-full bg-teal-400 text-white py-3 rounded-lg hover:bg-teal-500 transition-colors"
              >
                Add Spot
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spots Grid */}
      <div className="container mx-auto px-8 py-8 grid md:grid-cols-2 lg:grid-cols-3 gap-12 pb-32">
        {spots.map((spot, index) => (
          <motion.div
            key={spot.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <ImageWithFallback
                src={spot.image}
                alt={spot.name}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute top-4 right-4 bg-indigo-500 text-white px-4 py-2 rounded-full text-sm">
                {spot.rating}
              </div>
              <button
                onClick={() => handleDeleteSpot(spot.id)}
                className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl text-indigo-500 mb-2">{spot.name}</h3>
              <p className="text-gray-600">{spot.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-pink-400 to-pink-500 py-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex justify-between items-start">
            <div className="text-gray-800 max-w-md">
              <p className="text-xl mb-4">
                Le OFF is an initiative led by Vinexposium, the first Wine and Spirits trade fair in the city whose values it wishes to embody.
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-800 mb-2">Follow us</p>
              <div className="flex gap-4 justify-end">
                <button className="text-gray-800 hover:text-gray-600">Instagram</button>
                <button className="text-gray-800 hover:text-gray-600">Map</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}