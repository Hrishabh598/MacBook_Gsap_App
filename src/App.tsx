import Navbar from './components/NavBar'
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import ColorScaleProvider from "./store";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import Showcase from "./components/Showcase.tsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <ColorScaleProvider>
            <main>
                <Navbar/>
                <Hero/>
                <ProductViewer/>
                <Showcase />
            </main>
        </ColorScaleProvider>
    )
}
export default App
