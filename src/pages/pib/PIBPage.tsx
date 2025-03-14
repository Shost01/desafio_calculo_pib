import PibChart from "../../components/pibchart/PibChart";

const PIBPage = () => {
    return (
        <div className="container mx-auto p-6 flex flex-col items-center">
            {/* Ícone Centralizado */}
            <div className="text-4xl text-indigo-900 mb-4">
                📈
            </div>

            {/* Gráfico */}
            <div className="w-full">
                <PibChart />
            </div>
        </div>
    );
};

export default PIBPage;
