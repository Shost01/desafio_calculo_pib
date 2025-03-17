import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, LogarithmicScale, PointElement, ChartOptions } from "chart.js";
import { usePibContext } from "../../context/PibContext";  // Importando o contexto

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, LogarithmicScale, PointElement);

const PibChart = () => {
    const { pibData, maxPib, maxPibPerCapita } = usePibContext(); // Usando o contexto

    const chartData = {
        labels: pibData.map((item) => item.ano),
        datasets: [
            {
                label: "PIB Total (US$) - Linha Azul",
                data: pibData.map((item) => item.pib),
                borderColor: "blue",
                fill: false,
                yAxisID: "y",
                borderWidth: 2,
                pointRadius: 3,
                tension: 0.3,
            },
            {
                label: "PIB Per Capita (US$) - Linha Verde",
                data: pibData.map((item) => item.pibPerCapita),
                borderColor: "green",
                fill: false,
                yAxisID: "y1",
                borderWidth: 2,
                pointRadius: 3,
                tension: 0.3,
            },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true, // Ajusta o grafico ao tamanho da tela (Contêiner)
        maintainAspectRatio: false, // Faz o gráfico preenche o espaço disponivel
        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true, // icone redondo
                    boxWidth: 12,
                    padding: 15,
                    font: { size: 14 },
                },
            },
        },
        scales: {
            x: {
                title: { display: true, text: "Ano", font: { size: 14, weight: "bold" } },
                grid: { color: "rgba(0,0,0,0.1)" }
            },
            y: {
                title: { display: true, text: "PIB Total (US$)", font: { size: 14, weight: "bold" } },
                type: "linear", // define escala Linear
                ticks: {
                    stepSize: 1_000_000, // intervalo de valores no eixo Y
                    callback: function (value) {
                        return Number(value).toLocaleString("pt-BR"); // Formatação para Pt-Br
                    },
                    font: { size: 12 },
                },
                suggestedMin: 0,
                suggestedMax: maxPib, // Limites sugeridos do eixo Y
                grid: { color: "rgba(0,0,0,0.1)" }
            },
            y1: {
                title: { display: true, text: "PIB Per Capita (US$)", font: { size: 14, weight: "bold" } },
                position: "right",
                ticks: {
                    callback: function (value) {
                        return Number(value).toFixed(2);
                    },
                    font: { size: 12 },
                },
                suggestedMin: 8000,
                suggestedMax: maxPibPerCapita,
                grid: { drawOnChartArea: false, color: "rgba(0,0,0,0.1)" }
            },
        },
    };

    return (
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-semibold mb-4">Evolução do PIB Brasileiro</h2>
            <div className="overflow-x-auto">
                <div className="min-w-[1000px] h-96">
                    <Line data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
};

export default PibChart;
