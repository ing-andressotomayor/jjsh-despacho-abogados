export const Menu = () => {

    const fuente = { fontFamily: "Ancizar Sans" }

    const listaMenu = [
        { id: '1', titulo: 'Inicio' },
        { id: '2', titulo: 'Contacto' },
        { id: '3', titulo: 'Nosotros' },
        { id: '4', titulo: 'Servicios' }
    ]


    return (
        <div className="hidden lg:flex flex-col justify-evenly items-center bg-gradient-to-r from-black  to-[#635a33] h-screen w-screen  ">

            <div className="flex flex-col justify-center items-center">
                <img className="w-[8vw] " src="src\assets\svg-imagenes\logo-despacho-juridico-de-abogados.svg" alt="" />
                <h1 style={fuente} className="text-[#a5975a] text-[2vw] animate__animated animate__backInLeft ">JJSH y Asociados</h1>
                <h1 style={fuente} className="text-[#a5975a] text-[2vw] animate__animated animate__backInLeft ">Despacho de abogados</h1>
                <h5 style={fuente} className="text-white  text-[1.5vw]">"Protegemos tus intereses con compromiso y excelencia."</h5>
            </div>

            <nav className="">
                <ul className="flex justify-center gap-9 text-white  pb-5">
                    {listaMenu.map(menu => <li key={menu.id} style={fuente} className="navegacion-menu  ">{menu.titulo}</li>)}
                </ul>
                <div style={fuente} className="flex justify-center"><button className="border-[1px] text-white text-[1vw] hover:cursor-pointer mt-[2vw] p-[1vw] ">Asesoria sin costo</button></div>
            </nav>
        </div>
    )
}