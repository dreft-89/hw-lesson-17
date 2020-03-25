function getDiscriminant (a, b, c) {
  return b * b - 4 * a * c
}

function getRoot (a, b, c) {
  var discriminant = getDiscriminant(a, b, c)

  if (discriminant < 0) {
    return {}
  }
  if (discriminant === 0) {
    return {
      x1: -(b / 2 * a),
      x2: -b / 2 * a
    }
  }
  if (discriminant > 0) {
    return {
      x1: (-b + Math.sqrt(discriminant)) / (2 * a),
      x2: (-b - Math.sqrt(discriminant)) / (2 * a)
    }
  }
}

module.exports = {
  getDiscriminant,
  getRoot
}
