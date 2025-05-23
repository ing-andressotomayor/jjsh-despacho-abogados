const ListaMenu = () => {
    return (
        <>
            <ul className="animate__animated animate__slideInLeft flex flex-col justify-evenly w-full h-full ">
                <li style={{ fontFamily: 'Playwrite AU SA ' }} className="text-white block text-base s:text-lg md:text-xl pl-[5vw] underline cursor-pointer ">Inicio</li>
                <li style={{ fontFamily: 'Playwrite AU SA ' }} className="text-white block text-base s:text-lg md:text-xl pl-[5vw] underline cursor-pointer ">Contacto</li>
                <li style={{ fontFamily: 'Playwrite AU SA ' }} className="text-white block text-base s:text-lg md:text-xl pl-[5vw] underline cursor-pointer ">Nosotros</li>
                <li style={{ fontFamily: 'Playwrite AU SA ' }} className="text-white block text-base s:text-lg md:text-xl pl-[5vw] underline cursor-pointer ">Servicios</li>
            </ul>
        </>
    )
}

export default ListaMenu;