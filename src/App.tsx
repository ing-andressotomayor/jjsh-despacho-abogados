import Navegacion from "./paginas-abogados/Navegacion-despacho-juridico-de-abogados"
import { MisionVision } from "./paginas-abogados/MisionVision";
import { Footer } from "./paginas-abogados/Footer";
import { Nosotros } from "./paginas-abogados/Nosotros";
import AreasDePractica from "./paginas-abogados/Areas-de-practica";

const App = () => {
    return (
        <>
            <Navegacion />
            <div className=" w-[80%] flex flex-col mx-auto justify-center items-center ">
                <Nosotros />
                <MisionVision />
                <AreasDePractica />
            </div>
            <Footer />

        </>
    )
}
export default App;