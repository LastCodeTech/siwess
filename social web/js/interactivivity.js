let togglebtn = document.getElementById('togglebtn');
let offCanvasNavBar = document.querySelector('.offCanvasNavBar')
let btn='hideNavBar';
// togglebtn.addEventListener('click',function(){
    
//     if(btn=='hideNavBar'){
//         btn='showNavBar';
//         wrapper.classList.remove('hidden');
//         // togglebtn.textContent='x';
//     }
//     else{
//         btn='hideNavBar';
//         wrapper.classList.add('hidden');
//         // togglebtn.innerHTML='<i class="fa-solid fa-bars" ></i>';
//     }
// })

togglebtn.addEventListener("click", () => {
  offCanvasNavBar.classList.toggle("-translate-x-full");
  
});