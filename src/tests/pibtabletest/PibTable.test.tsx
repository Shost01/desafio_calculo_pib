import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"; // Importa matchers do Testing Library
import PibTable from "../../components/pibtable/PibTable";

// Mock do ResizeObserver para evitar o erro
global.ResizeObserver = class ResizeObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
};

// Mock do hook PibData
vi.mock("../../components/pibdata/PibData", async () => {
    const actual = await vi.importActual("../../components/pibdata/PibData");
    return {
        ...actual,
        default: () => ({
            pibData: [
                { ano: "2000", pib: 5000000, pibPerCapita: 10000 },
                { ano: "2001", pib: 5500000, pibPerCapita: 11000 },
            ],
            maxPib: 6000000,
            maxPibPerCapita: 12000,
        }),
    };
});

describe("PibTable", () => {
    it("deve renderizar o título corretamente", () => {
        render(<PibTable />);

        // Verifica se o título foi renderizado corretamente
        expect(screen.getByText("Tabela de PIB por Ano")).toBeInTheDocument();
    });
});
