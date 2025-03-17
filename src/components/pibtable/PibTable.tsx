import { useState } from "react";
import { usePibContext } from "../../context/PibContext"; // Importa o contexto que contém os dados do PIB

// Função auxiliar para formatar valores numéricos como moeda em dólares americanos (USD)
const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};

const PibTable = () => {
    // Obtém os dados do PIB a partir do contexto
    const { pibData } = usePibContext();

    // Estado que controla a página atual da tabela (começa na página 1)
    const [currentPage, setCurrentPage] = useState(1);

    // Número fixo de itens exibidos por página (10 registros por página)
    const [itemsPerPage] = useState(10);

    // Cálculo dos índices para determinar quais itens devem ser exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage; // Índice do último item na página atual
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Índice do primeiro item na página atual

    // Obtém os itens que serão exibidos na página atual com base nos índices calculados
    const currentItems = pibData.slice(indexOfFirstItem, indexOfLastItem);

    // Função que atualiza o estado para definir a página selecionada
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Criação do array de números de páginas disponíveis para a paginação
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pibData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    } // Divide o total de itens pelo número de itens por página e arredonda para cima para determinar o número total de páginas

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            {/* Título da tabela */}
            <h2 className="text-center text-2xl font-semibold mb-4">
                Tabela de PIB por Ano
            </h2>

            {/* Contêiner para rolagem horizontal, caso a tabela ultrapasse a largura da tela */}
            <div className="overflow-auto">
                <table className="min-w-full table-auto border-collapse">
                    {/* Cabeçalho da tabela com os títulos das colunas */}
                    <thead>
                        <tr className="bg-indigo-900 text-white">
                            <th className="px-6 py-3 border text-left font-semibold">Ano</th>
                            <th className="px-6 py-3 border text-left font-semibold">PIB Total (US$)</th>
                            <th className="px-6 py-3 border text-left font-semibold">PIB Per Capita (US$)</th>
                        </tr>
                    </thead>
                    {/* Corpo da tabela onde os dados do PIB são exibidos */}
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={item.ano} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="px-6 py-3 border text-center">{item.ano}</td>
                                <td className="px-6 py-3 border text-center">{formatCurrency(item.pib)}</td>
                                <td className="px-6 py-3 border text-center">{formatCurrency(item.pibPerCapita)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-4">
                <nav>
                    <ul className="flex space-x-2">
                        {pageNumbers.map((number) => (
                            <li key={number}>
                                <button
                                    onClick={() => paginate(number)} // Muda para a página selecionada ao clicar
                                    className={`px-4 py-2 border rounded-md transition-all duration-200 
                                        ${
                                            currentPage === number
                                                ? "bg-blue-500 text-white" // Página ativa destacada em azul
                                                : "bg-white text-blue-500 border-gray-300 hover:bg-blue-600 hover:text-white"
                                        }`}
                                >
                                    {number} {/* Número da página */}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default PibTable;
