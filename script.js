

let modals = document.getElementsByClassName('modal')

for(let i of modals) {
    i.addEventListener('click', e => {
        let user = e.target.dataset.name,
            userCotainer = document.querySelectorAll('.user-name'),
            modal = document.querySelector('.modal-container-screen')
            // cambiar nombre
            for(let i of userCotainer) i.textContent = user
            // activar modal
            modal.classList.add('show-modal')
            // remover modal
            modal.addEventListener('click', e => {
                let target = e.target
                if(target == modal) modal.classList.remove('show-modal')
            })

    })
}
