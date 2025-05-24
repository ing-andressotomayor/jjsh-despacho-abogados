import { useState } from "react";
const AreasDePractica = () => {
    const fuente = { fontFamily: 'Ancizar Sans' };

    const derechoCivilDesc = "1";
    const derechoMercantilDesc = "2";
    const derechoLaboralDesc = "3";
    const derechoFamilarDesc = "4"
    const especializacion = new Map();
    especializacion.set("Derecho Civil", derechoCivilDesc);
    especializacion.set("Derecho Mercantil", derechoMercantilDesc);
    especializacion.set("Derecho Laboral", derechoLaboralDesc);
    especializacion.set("Derecho Familiar", derechoFamilarDesc);


    const [itemsExpandido, setItemsExpandido] = useState<Record<string, boolean>>({});

    const toggleItem = (nombre: string) => {

        setItemsExpandido((prev) => {
            return { ...prev, [nombre]: !prev[nombre] }
        });
    };

    return (
        <section className="mt-10 w-full">
            <h3 style={fuente} className="titulo">Áreas de especialización</h3>
            <div>
                <ul>
                    {
                        (() => {
                            return Array.from(especializacion).map(([key, value]) => {

                                return <div key={key}>
                                    <li style={fuente} onClick={() => toggleItem(key)} className="lg:text-[1vw] bg-[#a5975a] text-white p-3 border-1 hover:cursor-pointer"> {itemsExpandido[key] ? '−' : '+'} {key}</li>
                                    {itemsExpandido[key] && (
                                        <p className="animate__animated animate__fadeIn lg:text-[1vw]" style={{ animationDuration: "1000ms" }}>{value}</p>
                                    )}
                                </div>
                            })
                        })()
                    }
                </ul>
            </div>
        </section>
    );
};

export default AreasDePractica