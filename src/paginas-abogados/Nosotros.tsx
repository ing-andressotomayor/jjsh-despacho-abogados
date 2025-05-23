import { useState } from "react"

export const Nosotros = () => {


    const texto: string = 'En JJSH y Asociados, somos un despacho de abogados comprometido con brindar soluciones jurídicas de alta calidad, centradas en la excelencia, la ética y la profesionalidad. Con años de experiencia en el sector legal, nos especializamos en una amplia gama de áreas del derecho, incluyendo derecho corporativo, derecho civil, derecho penal, derecho laboral, y derecho familiar, entre otros. Nuestro equipo de abogados altamente capacitados ofrece asesoría legal personalizada, adaptada a las necesidades específicas de cada cliente, tanto a nivel individual como empresarial.'
    const textoOculto: string = 'En JJSH y Asociados, entendemos que cada caso es único, por lo que trabajamos estrechamente con nuestros clientes para desarrollar estrategias legales efectivas que les permitan alcanzar sus objetivos de manera eficiente. A lo largo de los años, hemos logrado establecer una sólida reputación en el ámbito jurídico, respaldada por nuestro compromiso con la justicia, la transparencia y el trato cercano con nuestros clientes.Nos dedicamos a ofrecer un servicio legal integral, con un enfoque en la resolución de conflictos de manera rápida y efectiva, siempre protegiendo los intereses de nuestros clientes. En JJSH y Asociados, nuestra prioridad es la confianza de nuestros clientes.Ya sea que necesites asesoría legal para tu empresa o estés buscando apoyo en asuntos personales, nuestros abogados están aquí para ayudarte a tomar las decisiones correctas.Contáctanos hoy mismo para agendar una consulta y descubre cómo podemos ayudarte a resolver tus problemas legales con la experiencia y el compromiso que nos caracteriza.'

    const [getVisibility, setVisibility] = useState('hidden')

    return (
        <section className="flex flex-col  mt-10">
            <h3 style={{ fontFamily: 'Ancizar Sans' }} className="titulo">Nosotros</h3>

            <p className="lg:text-[1vw] ">
                {texto}
            </p>
            {
                <>
                    <p className={`animate__animated animate__fadeIn lg:text-[1vw] ${getVisibility}`} style={{ animationDuration: "1000ms" }}>
                        {textoOculto}
                    </p>
                    <p onClick={() => setVisibility('hidden')} className={`${getVisibility === '' ? 'lg:text-[1vw]  hover:cursor-pointer text-[#a5975a]' : 'hidden'}`}>
                        Ocultar ...
                    </p>
                </>
            }
            <p onClick={() => setVisibility('')} className={`${getVisibility === 'hidden' ? 'lg:text-[1vw] text-[#a5975a]  hover:cursor-pointer' : 'hidden'}`}>
                Ver mas ...
            </p>

            <img className="mt-2" src="src\assets\jpg-imagenes\vision-despacho-de-abogados.jpg" alt="" />


        </section>

    )
}