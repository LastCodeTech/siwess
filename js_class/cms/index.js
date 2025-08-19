// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let brown = document.getElementById('brown');
// let purple = document.getElementById('purple');
// red.addEventListener('click', function(){
//     document.body.style.backgroundColor=red;
// })

let chooser = document.getElementById('chooser');
chooser.addEventListener('change', function(){
document.body.style.backgroundColor = this.value;
})//mine
let lister = document.getElementById('lister');
lister.addEventListener('change', function(){
document.body.style.color = this.value;
})