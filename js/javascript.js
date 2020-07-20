const closeButton = document.getElementById('close')
const banner1 = document.getElementById('banner1')

closeButton.addEventListener('click',()=>{
    banner1.classList.add('display-none');
})