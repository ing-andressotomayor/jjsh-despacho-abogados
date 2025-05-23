import { useEffect, useState } from "react"

export const useAreasPractica = () => {


    const [getValor, setValor] = useState<{ value: string, activate: boolean }>({ value: "", activate: true });
    useEffect(() => {
        setValor({ value: getValor.value, activate: getValor.activate })
    }, [getValor?.activate])


    return { getValor, setValor }

}