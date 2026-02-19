runAfterLoad(function() {

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
    burnInto: "fire"
};

elements.gasoline_gas = {
    color: "#fff3a1",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 2,

    tempLow: 109,
    stateLow: "gasolina",

    burn: 100,
    burnTime: 5,
    burnInto: "fire"
};

elements.gasoline_ice = {
    color: "#cfefff",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 800,

    tempHigh: 1,
    stateHigh: "gasolina",

    burn: 100,
    burnTime: 5,
    burnInto: "fire"
};

});