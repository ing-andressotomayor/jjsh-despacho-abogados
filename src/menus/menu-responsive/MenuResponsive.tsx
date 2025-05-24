import { useState } from "react";
import ListaMenu from "./Lista-menu-responsivo-despacho-juridico-de-abogados";

export const MenuResponsivo = () => {

    const fuente = { fontFamily: 'Ancizar Sans' }
    const [getList, setList] = useState(false);

    const procesarMenu = () => {
        setList(!getList)
        console.log(getList)
    }

    return (
        <div className="lg:hidden flex flex-col w-screen h-screen items-center bg-gradient-to-r from-black to-[#635a33]">
            <div className="flex w-full justify-evenly items-center ">
                <img style={{ width: "10%" }} className="" src="src\assets\svg-imagenes\logo-despacho-juridico-de-abogados.svg" alt="" />
                <h1 style={fuente} className="text-[#a5975a] text-[7vw]">JJSH y Asociados</h1>
                <img style={{ width: "10%" }} onClick={procesarMenu} className="hover:cursor-pointer" src="src\assets\svg-imagenes\menu-despacho-juridico-de-abogados.svg" alt="" />
            </div>

            {
                (() => {
                    if (getList != true)
                        return (
                            <div className="  h-full flex flex-col justify-evenly items-center ">
                                <h1 style={fuente} className="text-[#a5975a] text-center text-2xl animate__animated animate__backInLeft ">Despacho Juridico de Abogados</h1>
                                <h3 style={fuente} className="  w-[90vw] text-base sm:text-xl md:text-2xl text-center text-white">"Comprometidos con la justicia, guiamos tu camino legal con integridad y experiencia."</h3>
                                <button style={fuente} className="w-[60%]  p-[3vw] border-[1px] text-white lg:text-[1vw] hover:cursor-pointer  ">Asesoria sin costo</button>
                            </div>
                        )
                    else {
                        return <ListaMenu />
                    }
                })()
            }
        </div >
    )
}