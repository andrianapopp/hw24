// 1
const arr = [1, 2, 3]
const arr1 = [4, 5, 6]
alert(arr.concat(arr1))
//2
const arr2 = [1, 2, 3]
arr2.reverse()
alert(arr2)
//3
const arr3 = [1, 2, 3]
arr3.push(4, 5, 6)
alert(arr3)
//4
const arr4 = [1, 2, 3]
arr4.unshift(4, 5, 6)
alert(arr4)
//5
const arr5 = ['js', 'css', 'jq']
alert(arr5[0])
//6
const arr6 = ['js', 'css', 'jq']
alert(arr6.pop())
//7
const arr7 =  [1, 2, 3, 4, 5]
alert(arr7.slice(0, 3))
//8
const arr8 =  [1, 2, 3, 4, 5]
alert(arr8.slice(3))
//9
const arr9 =  [1, 2, 3, 4, 5]
arr9.splice(1,2)
alert(arr9)
//10
const arr10 = [1, 2, 3, 4, 5]
alert(arr10.slice(1, 4))
//11
const arr11 =  [1, 2, 3, 4, 5]
arr11.splice(3, 0,`a`, `b`, `c`)
alert(arr11)
//12
const arr12 =  [1, 2, 3, 4, 5]
arr12.splice(1, 0,`a`, `b`)
arr12.splice(4, 0, `c`)
arr12.push(`e`)
alert(arr12)
// 13
const arr13 = [3, 4, 1, 2, 7]
arr13.sort((a, b) => a > b ? 1 : -1)
alert(arr13)
//14
const arr14 = [5, 6, 7, 8, 9]
const sum = arr14.reduce((total, amount) => total + amount)
alert(sum)
//15
const arr15 = [5, 6, 7, 8, 9]
const sqrtArr = arr15.map(num => num **2)
alert(sqrtArr)
//16
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11]
const minusArr = arr16.filter(num => num < 0)
alert(minusArr)
//17
const arr17 = [1,-3, 5, 6,-7, 8, 9,-11]
const evenArr = arr17.filter(num => num % 2 === 0)
alert(evenArr)
//18
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
const moreThanFiveArr = arr18.filter(str => str.length > 5)
alert(moreThanFiveArr)
//19
const arr19 = [1, 2, [3, 4], 5, [6, 7]]
const subArr = arr19.filter(subs => Array.isArray(subs))
alert(subArr)
//20
const arr20= [5,-3, 6,-5, 0,-7, 8, 9]
const negativeArr = arr20.filter(neg => neg < 0)
const negLength = negativeArr.length
alert(negLength)