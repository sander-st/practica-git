


document.getElementById('modal').addEventListener('click', ()=> {
    let modal = document.querySelector('.modal-container-screen')

    // activando modal
    modal.classList.add('show-modal')

    modal.addEventListener('click', e => {
        let target = e.target
        if(target == modal)
            modal.classList.remove('show-modal')
    })
})

