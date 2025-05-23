import { useState } from "react";
const AreasDePractica = () => {
    const fuente = { fontFamily: 'Ancizar Sans' };

    const especializaciones = [
        'Derecho civil',
        'Derecho Mercantil',
        'Derecho Laboral',
        'Derecho Familiar'
    ];

    const [itemsExpandido, setItemsExpandido] = useState<Record<string, boolean>>({});

    const toggleItem = (nombre: string) => {


        setItemsExpandido((prev) => {
            return {
                ...prev,
                [nombre]: !prev[nombre]
            }
        });
    };

    return (
        <section className="mt-10 w-full">
            <h3 style={fuente} className="titulo">Áreas de especialización</h3>
            <div>
                <ul>
                    {especializaciones.map((nombre, indice) => (
                        <li
                            style={fuente}
                            className="lg:text-[1vw] bg-[#a5975a] text-white p-3 border-1 hover:cursor-pointer"
                            key={indice}
                            id={nombre}
                            onClick={() => toggleItem(nombre)}
                        >
                            {itemsExpandido[nombre] ? '−' : '+'} {nombre}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AreasDePractica