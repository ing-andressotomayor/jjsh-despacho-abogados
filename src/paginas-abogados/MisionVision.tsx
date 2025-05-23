import { useState } from "react"

export const MisionVision = () => {

    const textoMision: string = "En nuestro despacho jurídico, nos comprometemos a ofrecer soluciones legales integrales, éticas y personalizadas que respondan a las necesidades específicas de cada cliente."
    const textoOcultoMision: string = "Nuestro equipo de abogados altamente capacitados trabaja con profesionalismo, responsabilidad y un profundo sentido de la justicia para garantizar una asesoría y representación legal de excelencia. Como despacho de abogados, nuestra prioridad es proteger los derechos e intereses de nuestros clientes, construyendo relaciones basadas en la confianza, la transparencia y el respeto mutuo. A través de un enfoque preventivo y estratégico, buscamos no solo resolver conflictos legales, sino también evitar su surgimiento, aportando valor real en cada etapa del proceso jurídico."
    const textoVision: string = "Ser un despacho de abogados referente a nivel nacional e internacional, reconocido por su alto nivel de especialización, ética profesional y resultados positivos en la defensa y representación legal."
    const textoOcultoVision: string = "Aspiramos a consolidarnos como un despacho jurídico líder en innovación y calidad de servicio, adaptándonos a los constantes cambios del entorno legal y tecnológico. Nuestro objetivo es marcar la diferencia en la vida de las personas, empresas e instituciones que confían en nosotros, promoviendo el acceso a la justicia y el fortalecimiento del estado de derecho. Queremos que nuestro equipo de abogados sea sinónimo de confianza, compromiso y excelencia en cada área del derecho que ejercemos."
    const fuente = { fontFamily: 'Ancizar Sans' }
    const [getVisibilityMision, setVisibilityMision] = useState('hidden');
    const [getVisibilityVision, setVisibilityVision] = useState('hidden');
    return (

        <section className="grid grid-cols-2 gap-15  mt-10">
            {/*Mision*/}
            <div>
                <h3 style={fuente} className="titulo">Misión</h3>
                <p className=" lg:text-[1vw]">
                    {textoMision}
                </p>
                {
                    <>
                        <p className={`animate__animated animate__fadeIn lg:text-[1vw] ${getVisibilityMision}`} style={{ animationDuration: "1000ms" }}>
                            {textoOcultoMision}
                        </p>
                        <p onClick={() => setVisibilityMision('hidden')} className={`${getVisibilityMision === '' ? 'lg:text-[1vw] text-[#a5975a]  hover:cursor-pointer' : 'hidden'}`}>Ocultar ...</p>
                    </>
                }
                <p onClick={() => setVisibilityMision('')} className={`${getVisibilityMision === 'hidden' ? 'lg:text-[1vw] text-[#a5975a]  hover:cursor-pointer' : 'hidden'}`}>Ver más ...</p>
            </div>



            {/*Vision*/}
            <div>
                <h3 style={fuente} className="titulo">Visión</h3>
                <p className=" lg:text-[1vw]">
                    {textoVision}
                </p>
                {
                    <>
                        <p className={`animate__animated animate__fadeIn lg:text-[1vw] ${getVisibilityVision}`} style={{ animationDuration: "1000ms" }}>
                            {textoOcultoVision}
                        </p>
                        <p onClick={() => setVisibilityVision('hidden')} className={`${getVisibilityVision === '' ? 'lg:text-[1vw] text-[#a5975a]  hover:cursor-pointer' : 'hidden'}`}>Ocultar ...</p>
                    </>
                }
                <p onClick={() => setVisibilityVision('')} className={`${getVisibilityVision === 'hidden' ? 'lg:text-[1vw] text-[#a5975a]  hover:cursor-pointer' : 'hidden'}`}>Ver más ...</p>

            </div>
        </section>
    )
}