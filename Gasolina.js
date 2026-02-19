// Gasolina.js - Mod para Sandboxels

// Definición del elemento Gasolina (líquido)
sandboxels.createElement({
    id: "gasolina",
    name: "Gasolina",
    category: "liquid",
    color: "#f5e342",
    flammable: true,
    ignitionTicks: 5,
    temperature: 25, // temperatura ambiente
    properties: {
        evaporationTemp: 110,
        evaporationForm: "gasoline_gas",
        freezingTemp: 0,
        freezingForm: "gasoline_ice",
        corrodesMetal: false,
        reactsWithObjects: false
    }
});

// Gasolina en forma de Gas
sandboxels.createElement({
    id: "gasoline_gas",
    name: "Gasolina (Gas)",
    category: "gas",
    color: "#f5f5aa",
    flammable: true,
    ignitionTicks: 5,
    temperature: 120,
    behavior: "rises", // se eleva como gas
    properties: {
        condensesTo: "gasolina"
    }
});

// Gasolina en forma de Hielo
sandboxels.createElement({
    id: "gasoline_ice",
    name: "Gasolina (Hielo)",
    category: "solid",
    color: "#d9f5ff",
    flammable: true,
    ignitionTicks: 5,
    temperature: -10,
    properties: {
        meltsTo: "gasolina"
    }
});