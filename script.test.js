var obj = require('./script')

describe('getDiscriminant', function () {
  test('a = 4, b = 5, c = 2 Reult = -7', function () {
    expect(obj.getDiscriminant(4, 5, 2)).toBe(-7)
  })
  test('a = 2, b = 5, c = 2 Reult = 9', function () {
    expect(obj.getDiscriminant(2, 5, 2)).toBe(9)
  })
  test('a = 3, b = 6, c = 3 Reult = 0', function () {
    expect(obj.getDiscriminant(3, 6, 3)).toBe(0)
  })
})

describe('getRoot', function () {
  test('discriminant < 0 Result EMPTY: a = 4, b = 5, c = 2', function () {
    expect(obj.getRoot(4, 5, 2)).toEqual({})
  })
  test('discriminant = 0 Result {x1: -1, x2: -1}:  a = 3, b = 6, c = 3', function () {
    expect(obj.getRoot(3, 6, 3)).toEqual({ x1: -1, x2: -1 })
  })
  test('discriminant > 0 Result { x1: -0.5, x2: -2 }: a = 2, b = 5, c = 2', function () {
    expect(obj.getRoot(2, 5, 2)).toEqual({ x1: -0.5, x2: -2 })
  })
})
