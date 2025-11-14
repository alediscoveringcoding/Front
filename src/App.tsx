import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { BestSpots } from './components/BestSpots';
import { MapPage } from './components/MapPage';
import { Contact } from './components/Contact';

export type Page = 'home' | 'about' | 'spots' | 'map' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutUs onNavigate={setCurrentPage} />;
      case 'spots':
        return <BestSpots onNavigate={setCurrentPage} />;
      case 'map':
        return <MapPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}