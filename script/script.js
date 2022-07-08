const openBtn = window.document.querySelector("button")
const closeBtn = window.document.querySelector("#close")
const modal = window.document.querySelector(".modal")

//OPEN MODAL
openBtn.addEventListener('click', openModal)

function openModal(){
    modal.style.display = 'grid'
}

//CLOSE MODAL
closeBtn.addEventListener('click', closeModal)

function closeModal(){
    modal.style.display = 'none'
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal()
    }
})