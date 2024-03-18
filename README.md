# Marinahramtsova-js

Marinahramtsova-js is a Node.js module that provides various utilities for quantum computing tasks. It includes functions for generating random quantum state vectors, measuring qubits, and calculating inner products of quantum state vectors.

## Installation

To install Quantum Util, use npm: `npm install marinahramtsova-js`

## Usage
```javascript
const quantumUtil = require('quantum-util');

// Generate a random quantum state vector of dimension 2
const randomStateVector = quantumUtil.generateRandomStateVector(2);
console.log("Random State Vector:", randomStateVector);

// Measure a qubit state
const qubitState = [0.7071067811865475, math.complex(0, 0.7071067811865475)];
const measuredState = quantumUtil.measureQubit(qubitState);
console.log("Measured State:", measuredState);

// Calculate the inner product of two quantum state vectors
const stateVector1 = [0.7071067811865475, math.complex(0, 0.7071067811865475)];
const stateVector2 = [math.complex(0, 0.7071067811865475), 0.7071067811865475];
const innerProduct = quantumUtil.calculateInnerProduct(stateVector1, stateVector2);
console.log("Inner Product:", innerProduct);
```