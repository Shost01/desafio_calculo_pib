import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Ícone de menu

function Navbar() {
    const location = useLocation();

    // Configurando Navbar para não aparecer no menu
    if (location.pathname === "/") return null;

    return (
        <div className="w-full bg-indigo-900 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                
                {/* Link Menu */}
                <Link to="/" className="text-white text-xl font-bold flex items-center gap-2 hover:text-indigo-300 transition">
                    <FaBars className="text-2xl" /> Menu
                </Link>

                {/* Links de navegação */}
                <div className="flex gap-6 text-lg">
                    <Link to="/pib" className="hover:text-indigo-300 transition">Gráfico</Link>
                    <Link to="/table" className="hover:text-indigo-300 transition">Tabela</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
