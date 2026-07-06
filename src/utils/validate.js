function validateNumber(value, name = "value") {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number.`);
  }
}