//Enviar mail

const sendMail = () => {
    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('telefono').value
    let comentario = document.getElementById('comentario').value

    console.log("Nombre: ", nombre)
    document.getElementById('modal-texto').textContent = "Hola! "+nombre+" gracias tu consulta, nos pondremos en contacto a la brevedad."
    $('#exampleModal').modal('show')
}
const closeModal = () => {
    $('#exampleModal').modal('toggle')
}
