import { createContext, ReactNode, useState } from "react"

export const VisibilidadDiv = createContext<{ isVisible: boolean | undefined, setVisible: React.Dispatch<React.SetStateAction<boolean | undefined>> } | undefined>(undefined);

export const CrearContextoVD = ({ children }: { children: ReactNode }) => {

    const [isVisible, setVisible] = useState<boolean | undefined>(undefined);

    return (

        < VisibilidadDiv.Provider value={{ isVisible, setVisible }}>
            {children}
        </VisibilidadDiv.Provider >
    )
}