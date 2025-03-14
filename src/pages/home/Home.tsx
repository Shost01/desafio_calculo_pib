import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-50 bg-cover bg-center bg-[url('https://ik.imagekit.io/Shost/bg_pib.jpg?updatedAt=1741977592323')]">

            {/* Seção de Texto */}
            <section className="max-w-7xl w-full text-center py-16 px-6 relative flex flex-col items-center">
                {/* Fundo semitransparente com efeito fosco */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl"></div>
                
                <h2 className="text-5xl font-extrabold text-white mb-4 relative z-10 drop-shadow-lg">
                    Seja Bem-Vindo!
                </h2>
                <p className="text-xl text-gray-200 mb-8 relative z-10 max-w-2xl">
                    Explore a análise da evolução do PIB do Brasil ao longo dos anos, tanto em formato de gráfico quanto em tabela!
                </p>
            </section>

            {/* Seção de Botões */}
            <section className="max-w-7xl w-full flex flex-col items-center gap-6 px-6 py-2">
                {/* Botão PIB */}
                <Link 
                    to="/pib" 
                    className="w-full max-w-xs text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 
                    py-3 rounded-lg text-center text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                >
                    GRÀFICO 
                </Link>

                {/* Botão Tabela */}
                <Link 
                    to="/table" 
                    className="w-full max-w-xs text-white bg-indigo-700 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 
                    py-3 rounded-lg text-center text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-lg"
                >
                    TABELA 
                </Link>
            </section>
        </div>
    );
}

export default Home;
