import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components/layout';
import { InteractiveCursor } from './components/InteractiveCursor';
import { Home, Projects, ProjectDetail, About, Experience, Contact } from './pages';

// Styles
import './styles/globals.css';
import './styles/animations.css';
import './styles/components.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <InteractiveCursor />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
