/**
 * @file src/utils/expressionTemplates.js
 * @description Expression templates for formatting math expressions and helper functions.
 */

const formatSigned = require("./formatSigned");

/**
 * Templates for various mathematical expressions.
 */
const expressionTemplates = {
  equation: {
    linear: {
      standard: (a, b, c, x) =>
        `${formatSigned(`${a}${x}`, true)} ${formatSigned(b)} = ${c}`,

      slopeIntercept: (m, b, x) =>
        `y = ${formatSigned(`${m}${x}`, true)} ${formatSigned(b)}`,

      pointSlope: (m, x1, y1, x) =>
        `y ${formatSigned(-y1)} = ${m}(${x} ${formatSigned(-x1)})`,

      withAbsoluteValue: (a, b, c, x) =>
        `|${formatSigned(`${a}${x}`, true)} ${formatSigned(b)}| = ${c}`,

      withFractions: (a, b, c, x) =>
        `\\frac{${formatSigned(`${a}${x}`, true)}}{${b}} = ${c}`,

      withParentheses: (a, b, c, x) => `${a}(${x} ${formatSigned(b)}) = ${c}`,
    },
  },

  /**
   * @function fraction - Format a fraction expression.
   * @param {number} sign - Sign of the fraction (-1, 0, or 1).
   * @param {number} numerator - Numerator of the fraction.
   * @param {number} denominator - Denominator of the fraction.
   * @returns {string} - Formatted fraction expression.
   */
  fraction: (sign, numerator, denominator) =>
    denominator === 1
      ? `${sign < 0 ? "-" : ""}${numerator}`
      : `${sign < 0 ? "-" : ""}\\frac{${numerator}}{${denominator}}`,
};

module.exports = expressionTemplates;
