import axios from "axios";

// Criando a instância do Axios com a base URL correta
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL // Removido o ponto e vírgula
});

// Função para buscar dados do PIB
export const getPibData = async () => {
    try {
        const response = await api.get(
            "/5938/periodos/-100/variaveis/37?localidades=N1[all]"
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do PIB:", error);
        return null;
    }
};

// Função para buscar dados da população
export const getPopulationData = async () => {
    try {
        const response = await api.get(
            "/6579/periodos/-100/variaveis/9324?localidades=N1[all]"
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da população:", error);
        return null;
    }
};
