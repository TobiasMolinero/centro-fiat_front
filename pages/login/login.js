const inputNombreUsuario = document.querySelector('#inputNombreUsuario');
const inputContraseña = document.querySelector('#inputContraseña');

const btnIngresar = document.querySelector('#btnIngresar')


const validarUsuario = async(event) => {
    event.preventDefault()
    try {
        res = await axios.post('http://localhost:3000/usuarios/login', {
            nombre_usuario: inputNombreUsuario.value,
            contraseña: inputContraseña.value
        })
        if(res.data == 0){
            alert('Datos Incorrectos.')
        } else {
            alert(res.data)
            window.location.href = 'http://127.0.0.1:5500/pages/inicio/inicio.html?#'
        }
    } catch (error) {
        alert(error)
    }
} 

// btnIngresar.addEventListener('click', validarUsuario())