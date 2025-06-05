import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home.jsx';
import Gallery from './pages/gallery/Gallery.jsx';

const App = () => {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;