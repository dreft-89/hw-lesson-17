const obj = require('./scrpt')

describe('getDiscriminant', function () {
  test('SHOULD return -7 when a = 4, b = 5, c = 2', function () {
    expect(obj.getDiscriminant(4, 5, 2)).toEqual(-7)
  })

  test('SHOULD return 0 when a = 2, b = 4, c = 2', function () {
    expect(obj.getDiscriminant(2, 4, 2)).toEqual(0)
  })

  test('SHOULD return 33 when a = 2, b = 7, c = 2', function () {
    expect(obj.getDiscriminant(2, 7, 2)).toEqual(33)
  })
})
