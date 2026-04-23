import {useColorScale} from "../store";
import clsx from "clsx";
import {Canvas} from '@react-three/fiber'
import Lights from "./three/Lights.tsx";
import ModelSwitcher from './three/ModelSwitcher'
import {useMediaQuery} from "react-responsive";


const ProductViewer = () => {

    const {color, modelSize, setColor, setModelSize} = useColorScale();
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

    return (
        <section id="product-viewer">
            <div className="controls">
                <p className="info">Macbook {modelSize === "16" ? '16"' : '14"'} in color {color==='#2e2c2e'?'black':'white'}</p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div onClick={()=>setColor('#adb5bd')} className={clsx("bg-neutral-300",color==='#adb5bd' && 'active')} />
                        <div onClick={()=>setColor('#2e2c2e')} className={clsx("bg-neutral-900",color==='#2e2c2e' && 'active')} />
                    </div>

                    <div className="size-control">
                        <div onClick={()=>setModelSize("14")} className={clsx(modelSize==="14"?'bg-white text-black':'bg-transparent text-white')}><p>14"</p></div>
                        <div onClick={()=>setModelSize("16")} className={clsx(modelSize==="16"?'bg-white text-black':'bg-transparent text-white')}><p> 16" </p></div>
                    </div>


                </div>
            </div>
            <Canvas id="canvas" camera={{ position:[0,2,5], fov:50, near:0.1, far:100}}>
                <Lights />
                <ModelSwitcher modelSize={modelSize} isMobile={isMobile}/>
            </Canvas>
        </section>
    )
}
export default ProductViewer

