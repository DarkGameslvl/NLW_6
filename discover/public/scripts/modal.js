<<<<<<< HEAD
export function Modal() {
    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')

    cancelButton.addEventListener('click', close)

    function open() {
        modalWrapper.classList.add('active')
    }

    function close() {
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close,
    }
}
=======
export function Modal() {
    const cancelButton = document.querySelector('.button.cancel')
    const modalWrapper = document.querySelector('.modal-wrapper')

    cancelButton.addEventListener('click', close)

    function open() {
        modalWrapper.classList.add('active')
    }

    function close() {
        modalWrapper.classList.remove('active')
    }

    return {
        open,
        close,
    }
}
>>>>>>> b83758e74df287c14007443e70c1a368ae59d90a
