// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let brown = document.getElementById('brown');
// let purple = document.getElementById('purple');
// red.addEventListener('click', function(){
//     document.body.style.backgroundColor=red;
// })

let chooser = document.getElementById('chooser');
let space = document.getElementById('space');
chooser.addEventListener('change', function(){
space.style.backgroundColor = this.value;
})//mine
let lister = document.getElementById('lister');
lister.addEventListener('change', function(){
space.style.color = this.value;
})

// Font sizer
let font_size = document.getElementById('font_size');
let texts = document.getElementById('texts');


font_size.addEventListener('change', function(){

    space.style.fontSize = this.value+"rem";

})
let b = 'biscuit';
let x = 'sweet';
//let y = 'the + " " + b + " " + is  + " " + x';
let z = 'the ' + b +' is ' + x;
console.log(z);
let m = 2;
let n='10';
console.log(m+n);


