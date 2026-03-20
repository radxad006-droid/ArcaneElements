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
elements.wither = {
    color: "#2b003d",
    behavior: behaviors.GAS, // It floats around like a purple mist
    category: "energy",
    state: "gas",
    density: 1,
    reactions: {
        "plant": { "elem1": null, "elem2": "dead_plant", "chance": 0.05 },
        "grass": { "elem1": null, "elem2": "dead_plant", "chance": 0.05 },
        "wood": { "elem1": null, "elem2": "charcoal", "chance": 0.02 },
    },
    temp: -20, // It feels "cold" and death-like
};
elements.sunbeam = {
    color: ["#fff700", "#ffffff"],
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1000,
    glow: 1,
    brightness: 100,
    onStep: function(pixel) {
        // Sunbeams melt nearby ice automatically
        var neighbors = [[-1,0],[1,0],[0,-1],[0,1]];
        for (var i=0; i<neighbors.length; i++) {
            var nx = pixel.x + neighbors[i][0];
            var ny = pixel.y + neighbors[i][1];
            if (isEmpty(nx, ny, true)) continue;
            if (pixelMap[nx][ny].element === "ice") {
                changePixel(nx, ny, "water");
            }
        }
    }
};
// Add more complex interactions
if (!elements.fire.reactions) elements.fire.reactions = {};
elements.fire.reactions.mana = { "elem1": "plasma", "elem2": "plasma", "chance": 0.1 };

if (!elements.mana.reactions) elements.mana.reactions = {};
elements.mana.reactions.wither = { "elem1": "void", "elem2": "void", "chance": 0.01 };
// Create a custom category for your mod
createCategory("magic"); 

// Then update your elements to use it:
elements.mana.category = "magic";
elements.wither.category = "magic";
elements.holy_water.category = "magic";
elements.sunbeam.category = "magic";
