import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./components/LogoSection.jsx";
const App = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <Showcase/>
            <LogoSection/>
        </>
    )
}
export default App
