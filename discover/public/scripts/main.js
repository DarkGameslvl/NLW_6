<<<<<<< HEAD
import { Modal } from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        modalTitle.textContent = 'Marcar como lida'
        modalDescription.textContent =
            'Tem certeza que deseja marcar como lida esta pergunta?'
        modalButton.textContent = 'Sim, marcar como lida'
        modalButton.classList.remove('red')

        const roomId = document.querySelector('#room-id').dataset.id
        const form = document.querySelector('.modal form')
        const questionId = e.currentTarget.dataset.id
        form.action = `/question/${roomId}/${questionId}/check`

        modal.open()
    })
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        modalTitle.textContent = 'Excluir essa pergunta'
        modalDescription.textContent = 'Tem certeza que deseja excluir esta pergunta?'
        modalButton.textContent = 'Sim, excluir'
        modalButton.classList.add('red')

        const roomId = document.querySelector('#room-id').dataset.id
        const form = document.querySelector('.modal form')
        const questionId = e.currentTarget.dataset.id
        form.action = `/question/${roomId}/${questionId}/delete`

        modal.open()
    })
})
=======
import { Modal } from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll('a.check')

checkButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        modalTitle.textContent = 'Marcar como lida'
        modalDescription.textContent =
            'Tem certeza que deseja marcar como lida esta pergunta?'
        modalButton.textContent = 'Sim, marcar como lida'
        modalButton.classList.remove('red')

        const roomId = document.querySelector('#room-id').dataset.id
        const form = document.querySelector('.modal form')
        const questionId = e.currentTarget.dataset.id
        form.action = `/question/${roomId}/${questionId}/check`

        modal.open()
    })
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault()
        modalTitle.textContent = 'Excluir essa pergunta'
        modalDescription.textContent = 'Tem certeza que deseja excluir esta pergunta?'
        modalButton.textContent = 'Sim, excluir'
        modalButton.classList.add('red')

        const roomId = document.querySelector('#room-id').dataset.id
        const form = document.querySelector('.modal form')
        const questionId = e.currentTarget.dataset.id
        form.action = `/question/${roomId}/${questionId}/delete`

        modal.open()
    })
})
>>>>>>> b83758e74df287c14007443e70c1a368ae59d90a
