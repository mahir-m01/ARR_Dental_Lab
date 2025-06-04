import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Gallery from './pages/gallery/Gallery.jsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
    );
};

export default App;