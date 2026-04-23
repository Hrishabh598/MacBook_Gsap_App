import {useRef} from "react";
import {PresentationControls} from "@react-three/drei";
import * as THREE from "three";
import MacBookModel16 from '../models/Macbook-16'
import MacBookModel14 from "../models/Macbook-14";
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {modelScales} from "../../constants";
import type {ModelSize} from "../../constants";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE= 5

const fadeMeshes = (group:THREE.Group|null, opacity:number) =>{
    if(!group) return;

    group.traverse((child)=>{
        if(child instanceof THREE.Mesh){
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION});
        }
    })
}

const moveGroup = (group:THREE.Group|null, x:number)=>{
    if(!group) return;
    gsap.to(group.position, {x, duration:ANIMATION_DURATION});
}

const ModelSwitcher = ({modelSize, isMobile}:{modelSize:ModelSize; isMobile:boolean}) => {
    const smallMacBookRef = useRef<THREE.Group>(null)
    const largeMacBookRef = useRef<THREE.Group>(null)

    const showLargeMacbook = modelSize === "16";
    const platform = isMobile ? 'mobile' : 'desktop';
    const smallScale = modelScales["14"][platform];
    const largeScale = modelScales["16"][platform];

    const controlsConfig:{snap:boolean,speed:number,zoom:number,azimuth:[number,number],config:{mass:number,tension:number,friction:number}}={
        snap:true,
        speed:1,
        zoom:1,
        azimuth: [-Infinity, Infinity],
        config:{mass:1, tension:170, friction:26}
    }

    useGSAP(()=>{
      if(showLargeMacbook){
          moveGroup(smallMacBookRef.current,-OFFSET_DISTANCE);
          moveGroup(largeMacBookRef.current, 0);
          fadeMeshes(smallMacBookRef.current, 0);
          fadeMeshes(largeMacBookRef.current, 1);

      } else {
          moveGroup(smallMacBookRef.current,0);
          moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);
          fadeMeshes(smallMacBookRef.current, 1);
          fadeMeshes(largeMacBookRef.current, 0);
      }
    },{ dependencies: [modelSize] })

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacBookRef} >
                    <MacBookModel16 scale={largeScale} />
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacBookRef} >
                    <MacBookModel14 scale={smallScale} />
                </group>
            </PresentationControls>
        </>

    )
}
export default ModelSwitcher
