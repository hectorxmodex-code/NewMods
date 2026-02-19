// =======================
// GASOLINA - Mod Sandboxels
// =======================

// GASOLINA (LÍQUIDO)
elements.gasolina = {
    color: "#f5e342",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 720,

    tempHigh: 110,
    stateHigh: "gasoline_gas",

    tempLow: 0,
    stateLow: "gasoline_ice",

    burn: 100,
    burnTime: 5,
    burnInto: "fire",

    reactions: {} // No reacciona con nada
};

// GASOLINA (GAS)
elements.gasoline_gas = {
    color: "#f5f5aa",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 2,

    tempLow: 109,
    stateLow: "gasolina",

    burn: 100,
    burnTime: 5,
    burnInto: "fire",

    reactions: {}
};

// GASOLINA (HIELO)
elements.gasoline_ice = {
    color: "#d9f5ff",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 800,

    tempHigh: 1,
    stateHigh: "gasolina",

    burn: 100,
    burnTime: 5,
    burnInto: "fire",

    reactions: {}
};