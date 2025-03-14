import axios from "axios";

const BASE_URL = "https://servicodados.ibge.gov.br/api/v3/agregados";

export const getPibData = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/5938/periodos/-100/variaveis/37?localidades=N1[all]`
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados do PIB:", error);
        return null;
    }
};

export const getPopulationData = async () => {
    try {
        const response = await axios.get(
            `${BASE_URL}/6579/periodos/-100/variaveis/9324?localidades=N1[all]`
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados da população:", error);
        return null;
    }
};
