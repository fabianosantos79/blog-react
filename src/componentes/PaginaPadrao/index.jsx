import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";


export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            {/* Aqui será renderizado o conteudo das rotas */}
            <Outlet />
            {children}
        </main>
    )
}