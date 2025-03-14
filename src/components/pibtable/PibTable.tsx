import { useState } from "react";
import { usePibContext } from "../../context/PibContext";  // Importando o contexto

// Função para formatar os valores monetários em dólares
const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};

const PibTable = () => {
    const { pibData } = usePibContext(); // Usando o contexto
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Número de itens por página

    // Paginação
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = pibData.slice(indexOfFirstItem, indexOfLastItem);

    // Função para mudar a página
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    // Calcular o número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pibData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-semibold mb-4">Tabela de PIB por Ano</h2>

            <div className="overflow-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-indigo-900 text-white">
                            <th className="px-6 py-3 border text-left font-semibold">Ano</th>
                            <th className="px-6 py-3 border text-left font-semibold">PIB Total (US$)</th>
                            <th className="px-6 py-3 border text-left font-semibold">PIB Per Capita (US$)</th>
                        </tr>
                    </thead>
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
                                    onClick={() => paginate(number)}
                                    className={`px-4 py-2 border rounded-md transition-all duration-200 
                                        ${currentPage === number 
                                            ? "bg-blue-500 text-white" 
                                            : "bg-white text-blue-500 border-gray-300 hover:bg-blue-600 hover:text-white"
                                        }`}
                                >
                                    {number}
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
