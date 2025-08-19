

let btn = document.getElementById('changer');
let present = document.getElementById('present');


btn.addEventListener('click', function(){
    document.body.style.backgroundColor = randomColor();
    present.textContent = randomColor();
});


function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = "#";

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.random() * 16;

        color += letters[Math.floor(randomNumber)];
        
    }

    return color;
}

