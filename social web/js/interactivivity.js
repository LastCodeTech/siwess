let togglebtn = document.getElementById('togglebtn');
let wrapper = document.querySelector('.wrapper')
let btn='hideNavBar';
togglebtn.addEventListener('click',function(){
    
    if(btn=='hideNavBar'){
        btn='showNavBar';
        wrapper.classList.remove('hidden');
        // togglebtn.textContent='x';
    }
    else{
        btn='hideNavBar';
        wrapper.classList.add('hidden');
        // togglebtn.innerHTML='<i class="fa-solid fa-bars" ></i>';
    }
})
