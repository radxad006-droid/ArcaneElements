// ArcaneElements Mod for Sandboxels
// Version 1.0.0

// 1. Define the Holy Water element (The result of magic)
elements.holy_water = {
    color: "#e1f5fe",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 1,
    state: "liquid",
    density: 1050,
    stain: 0.01,
};

// 2. Define the Mana element (The source)
elements.mana = {
    color: ["#00d4ff", "#005eff", "#6a00ff"], // Animated glowing colors
    behavior: [
        "XX|M2|XX",
        "M1|CH:holy_water%0.1|M1",
        "XX|M2|XX",
    ],
    category: "energy",
    state: "liquid",
    density: 500,
    insulate: true,
    glow: 1,
};

// 3. Define the Reaction: Mana + Water = Holy Water
if (!elements.water.reactions) elements.water.reactions = {};
elements.water.reactions.mana = { "elem1": "holy_water", "elem2": null, "chance": 0.2 };

console.log("ArcaneElements Mod Loaded! Magic is in the air.");
