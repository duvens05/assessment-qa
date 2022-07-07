const {shuffleArray} = require('./utils')
const testarr1 = [1,2,3,4]
describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', ()=>{
        expect(Array.isArray(shuffleArray(testarr1))).toBe(true)
    })

    test('have its ouput array the same length as its input array', ()=>{
        expect(shuffleArray(testarr1)).toHaveLength(testarr1.length)
    })
})