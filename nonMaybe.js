"use strict";

function nonMaybe(value) {
  if (global.expect) {
    expect(value).toBeTruthy();
  }

  if (value === null || value === undefined) {
    const e = new Error('NonMaybeType cast failed.');
    throw new Error(e.stack.toString());
  }

  return value;
}

module.exports = nonMaybe;
