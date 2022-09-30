import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import { MaidenScorebookData } from './components/Projects/ProjectImageData/MaidenScorebookData';
import { ColormerizeData } from './components/Projects/ProjectImageData/ColormerizeData';
import { ColormerizeGallery } from './pages/Galleries/ColormerizeGallery';
import { MaidenScorebookGallery } from './pages/Galleries/MaidenScorebookGallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/maidenscorebook" element={<MaidenScorebookGallery routeLocation={MaidenScorebookData}/>}/>
        <Route path="/colormerize" element={<ColormerizeGallery routeLocation={ColormerizeData}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
