goog.provide('docstuff');

/** @type {number} */
docstuff.answerToLifeTheUniverseAndEverything = 42;

/** @enum {number} */
docstuff.status {
  OPEN: 1,
  CLOSED: 2
};

/** @typedef {{x: number, y: number}} */
docstuff.Point;

/**
 * @param {docstuff.Point} point
 * @param {number} distance
 * @return {docstuff.Point}
 */
docstuff.translate = function(point, distance) {
  return {
    x: point.x + distance,
    y: point.y + distance
  };
}

