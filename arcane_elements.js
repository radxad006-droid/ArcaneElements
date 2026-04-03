'use strict';

// Proper Behavior Definitions
const behaviors = {
  fire: {
    name: 'Fire',
    power: 100,
    description: 'The element of fire.'
  },
  water: {
    name: 'Water',
    power: 80,
    description: 'The element of water.'
  }
};

// Reaction Syntax
function react(element1, element2) {
  const reactions = {
    fireWater: 'Steam',
    waterFire: 'Steam'
  };

  return reactions[`${element1}${element2}`] || 'No reaction';
}

// Error Checking
function validateElements(element) {
  if (!behaviors[element]) {
    throw new Error(`Element ${element} is not valid`);
  }
}

// Example Usage
try {
  validateElements('fire');
  console.log(react('fire', 'water'));
} catch (error) {
  console.error(error.message);
}