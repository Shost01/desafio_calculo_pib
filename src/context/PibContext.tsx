import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getPibData, getPopulationData } from "../services/Service";

// Define a estrutura do contexto PIB
interface PibContextType {
    pibData: { ano: string; pib: number; pibPerCapita: number }[];
    maxPib: number;
    maxPibPerCapita: number;
}

// Cria o contexto PIB
const PibContext = createContext<PibContextType | undefined>(undefined);

// Provedor do contexto PIB
export const PibProvider = ({ children }: { children: ReactNode }) => {
    const exchangeRate = 5; // Taxa de conversão para reais

    // Estados para armazenar os dados do PIB e seus valores máximos
    const [pibData, setPibData] = useState<{ ano: string; pib: number; pibPerCapita: number }[]>([]);
    const [maxPib, setMaxPib] = useState<number>(0);
    const [maxPibPerCapita, setMaxPibPerCapita] = useState<number>(0);

    useEffect(() => {
        const fetchPibData = async () => {
            try {
                // Obtém os dados do PIB e da população
                const pibResponse = await getPibData();
                const rawPibData = pibResponse?.[0]?.resultados[0]?.series[0]?.serie;

                const populationResponse = await getPopulationData();
                const rawPopData = populationResponse?.[0]?.resultados[0]?.series[0]?.serie;

                if (rawPibData && rawPopData) {
                    // Processa os dados filtrando apenas os anos que possuem população correspondente
                    const formattedData = Object.entries(rawPibData)
                        .filter(([ano]) => rawPopData[ano] || rawPopData[String(Number(ano) - 1)])
                        .map(([ano, valor]) => {
                            const anoNum = Number(ano);
                            // Obtém a população do ano correspondente ou do ano anterior
                            const pop = Number(rawPopData[ano]) || Number(rawPopData[String(anoNum - 1)]) || 213_000_000;
                            // Converte o PIB para reais
                            const pibValue = (Number(valor) * 1000) / exchangeRate;
                            // Calcula o PIB per capita
                            const pibPerCapitaValue = pibValue / pop;
                            return { ano, pib: pibValue, pibPerCapita: pibPerCapitaValue };
                        });

                    // Atualiza os estados com os dados formatados
                    setPibData(formattedData);
                    setMaxPib(Math.max(...formattedData.map((item) => item.pib), 1e6));
                    setMaxPibPerCapita(Math.max(...formattedData.map((item) => item.pibPerCapita), 1));
                }
            } catch (error) {
                console.error("Erro ao buscar dados do PIB e/ou população:", error);
            }
        };

        fetchPibData();
    }, []);

    return (
        <PibContext.Provider value={{ pibData, maxPib, maxPibPerCapita }}>
            {children}
        </PibContext.Provider>
    );
};

// Hook para acessar o contexto PIB
export const usePibContext = (): PibContextType => {
    const context = useContext(PibContext);
    if (!context) {
        throw new Error("usePibContext must be used within a PibProvider");
    }
    return context;
};
