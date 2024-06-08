import  a from './test-require.js'
// a = a+1
setInterval(() => {
console.log('module', JSON.stringify(a))
}, 1000)