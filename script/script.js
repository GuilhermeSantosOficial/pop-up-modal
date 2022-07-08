const openBtn = window.document.querySelector("button")
const closeBtn = window.document.querySelector("#close")
const modal = window.document.querySelector(".modal")
const form = window.document.querySelector('form')

//OPEN MODAL
openBtn.addEventListener('click', openModal)

function openModal(){
    modal.style.display = 'grid'
}

//CLOSE MODAL
closeBtn.addEventListener('click', closeModal)

function closeModal(){
    
    modal.classList.add('close-modal-animation')
    setTimeout(() => {
        modal.style.display = 'none'
        window.location.reload()
    }, 1000)
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal()
    }
})

//Thank you message after subscription