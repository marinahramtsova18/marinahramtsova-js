// Importing external modules
const math = require('mathjs');

// Function to generate a random quantum state vector
function generateRandomStateVector(dimensions) {
    const randomVector = math.random([dimensions], 'complex');
    const normalizedVector = math.divide(randomVector, math.norm(randomVector));
    return normalizedVector;
}

// Function to measure the state of a qubit
function measureQubit(stateVector) {
    const probabilities = math.abs(stateVector.map(math.square));
    const outcome = math.pickRandom([...Array(stateVector.length).keys()], 1, probabilities)[0];
    const newStateVector = math.zeros(stateVector.length);
    newStateVector[outcome] = math.complex(math.re(stateVector[outcome]), 0);
    return newStateVector;
}

// Function to calculate the inner product of two quantum state vectors
function calculateInnerProduct(stateVector1, stateVector2) {
    const conjugateVector1 = math.conj(stateVector1);
    return math.dot(conjugateVector1, stateVector2);
}

module.exports = {
    generateRandomStateVector,
    measureQubit,
    calculateInnerProduct
};
