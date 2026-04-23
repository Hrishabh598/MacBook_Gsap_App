/* eslint-disable react-refresh/only-export-components */
import {createContext,useState,useContext} from "react";
import {macColor, defaultModelSize} from '../constants'
import type {ModelSize} from '../constants'

interface ColorScaleObject {
    color: string;
    modelSize: ModelSize;
    setColor: (color: string) => void;
    setModelSize: (size: ModelSize) => void;
    reset: () => void;
}

const ColorScaleContext = createContext<ColorScaleObject | null>(null)

export default function ColorScaleProvider({children}:{children:React.ReactNode}) {
    const [color, setColor] = useState<string>(macColor)
    const [modelSize, setModelSize] = useState<ModelSize>(defaultModelSize)

    const reset = () =>{
        setColor(macColor)
        setModelSize(defaultModelSize)
    }

    return( <ColorScaleContext.Provider value={{color, modelSize, setColor, setModelSize, reset}}>
        {children}
    </ColorScaleContext.Provider>
    );
}

export const useColorScale= () => {
    const ctx = useContext(ColorScaleContext);
    if(!ctx) throw new Error("Please use this hook inside the ColorScaleProvider");
    return ctx;
}