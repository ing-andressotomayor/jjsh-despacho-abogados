import { JSX } from "react";
import { Menu } from "../menus/Menu";
import { MenuResponsivo } from "../menus/menu-responsive/MenuResponsive";
const NavegacionAbogados: () => JSX.Element = () => {

    return (

        <header>
            <Menu />
            <MenuResponsivo />
        </header>
    )
}
export default NavegacionAbogados;