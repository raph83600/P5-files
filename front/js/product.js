console.log ('je suis sur la page product')

console.log (window.location.search)
let searchparams = new URLSearchParams(window.location.search)
let id = searchparams.get('id')
console.log (id)