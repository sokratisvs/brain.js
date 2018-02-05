"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.measure = measure;
/**
 * sigmoid activation
 * @param value
 * @returns {number}
 */
function activate(value) {
  return 1 / (1 + Math.exp(-value));
}

/**
 * sigmoid derivative
 * @param weight
 * @param error
 * @returns {number}
 */
function measure(weight, error) {
  return weight * (1 - weight) * error;
}
//# sourceMappingURL=sigmoid.js.map