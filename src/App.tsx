import Navbar from './components/NavBar'
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import ColorScaleProvider from "./store";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <ColorScaleProvider>
            <main>
                <Navbar/>
                <Hero/>
                <ProductViewer/>
            </main>
        </ColorScaleProvider>
    )
}
export default App
