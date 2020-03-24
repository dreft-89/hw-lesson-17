function getDiscriminant(a, b, c) {
  return b * b - 4 * a * c
}

function getRoots(a, b, c) {
  const discriminant = getDiscriminant(a, b, c)

  if (discriminant < 0) {
    return {}
  }

  if (discriminant === 0) {
    const root = -b / 2 * a

    return {
      x1: root,
      x2: root
    }
  }

  return {
    x1: (-b + Math.sqrt(discriminant)) / (2 * a),
    x2: (-b - Math.sqrt(discriminant)) / (2 * a)
  }
}

module.exports = {
  getDiscriminant,
  getRoots
}
