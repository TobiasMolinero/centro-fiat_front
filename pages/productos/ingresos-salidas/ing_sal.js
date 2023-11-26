const botonIngresos = document.querySelector('#botonIngresos');
const botonSalidas = document.querySelector('#botonSalidas');
const btnNuevoIngreso = document.querySelector('#btnNuevoIngreso')
const btnNuevaSalida = document.querySelector('#btnNuevaSalida')


const formIngreso = document.querySelector('#formIngreso')
const formSalida = document.querySelector('#formSalida')

const formularioIngresos = document.querySelector('#formularioIngresos')
const btnCancelarIngreso = document.querySelector('#btnCancelarIngreso')
const btnGuardarIngreso = document.querySelector('#btnGuardarIngreso')

let txtFechaIngreso = document.querySelector('#txtFechaIngreso')
let txtCantidadIngreso = document.querySelector('#txtCantidadIngreso')
let cboProductoIngreso = document.querySelector('#cboProductoIngreso')

let txtFechaSalida = document.querySelector('#txtFechaSalida')
let txtCantidadSalida = document.querySelector('#txtCantidadSalida') 
let cboProductoSalida = document.querySelector('#cboProductoSalida')

const formularioSalida = document.querySelector('#formularioSalida')
const btnCancelarSalida = document.querySelector('#btnCancelarSalida')
const btnGuardarSalida = document.querySelector('#btnGuardarSalida')

const thead = document.querySelector('#thead');
const tbody = document.querySelector('#tbody');

let botonIngActive = true;
let botonSalActive = false;

let datos = [];


botonSalidas.addEventListener('click', () => {
    selectBotonSalidas();
    getSalidas();
    formularioIngresos.reset()
    formularioIngresos.style.display = 'none'
    btnNuevoIngreso.disabled = false
})

botonIngresos.addEventListener('click', () => {
    selectBotonIngresos();
    getIngresos();
    formularioSalida.reset()
    formularioSalida.style.display = 'none'
    btnNuevaSalida.disabled = false
})

btnNuevoIngreso.addEventListener('click', () => {
    btnNuevoIngreso.disabled = true
    formularioIngresos.style.display = 'inline-block'
    cargarComboBox()
})

btnNuevaSalida.addEventListener('click', () => {
    btnNuevaSalida.disabled = true
    formularioSalida.style.display = 'inline-block'
    cargarComboBoxSalida()
})

btnGuardarIngreso.addEventListener('click', () => {
    if(txtFechaIngreso.value == "" || txtCantidadIngreso.value == ""){
        alert('Debe ingresar fecha y cantidad.')
    } else {
        try {
            res = axios.post('http://localhost:3000/ingresos', {
                fecha: txtFechaIngreso.value,
                cod_producto: cboProductoIngreso.value,
                cantidad: +txtCantidadIngreso.value 
            })
            alert('Se registró con exito.')
            getIngresos()
            formularioIngresos.reset()
            formularioIngresos.style.display = 'none'
            btnNuevoIngreso.disabled = false
        } catch (error) {
            alert(error)
        }
    }
})

btnCancelarIngreso.addEventListener('click', () => {
    btnNuevoIngreso.disabled = false
    formularioIngresos.reset()
    formularioIngresos.style.display = 'none'
})

btnCancelarSalida.addEventListener('click', () => {
    btnNuevaSalida.disabled = false
    formularioSalida.reset()
    formularioSalida.style.display = 'none'
})


const selectBotonIngresos = () => {
    botonSalActive = false;
    botonIngActive = true;
    botonIngresos.style.backgroundColor = 'rgb(105, 105, 105)';
    botonSalidas.style.backgroundColor= 'rgb(196, 196, 196)';
    thead.style.backgroundColor = 'green';
}

const selectBotonSalidas = () => {
    botonSalActive = true;
    botonIngActive = false;
    botonSalidas.style.backgroundColor = 'rgb(105, 105, 105)';
    botonIngresos.style.backgroundColor= 'rgb(196, 196, 196)';
    thead.style.backgroundColor = 'red';
}

const cargarComboBox = async() => {
    try {
        response = await axios.get('http://localhost:3000/productos/cargarselect')
        cboProductoIngreso.innerHTML = ""
        response.data.forEach(p => {
            cboProductoIngreso.innerHTML += `
                <option value="${p.cod_producto}">${p.descripcion}</option>
            `
        })
    } catch (error) {
        alert(error)
    }
}

const cargarComboBoxSalida = async() => {
    try {
        response = await axios.get('http://localhost:3000/productos/cargarselect')
        cboProductoSalida.innerHTML = ""
        response.data.forEach(p => {
            cboProductoSalida.innerHTML += `
                <option value="${p.cod_producto}">${p.descripcion}</option>
            `
        })
    } catch (error) {
        alert(error)
    }
}

const getIngresos = async() => {
    try {
        let response = await axios.get("http://localhost:3000/ingresos")
        tbody.innerHTML = ""
        response.data.forEach(ing => {
            tbody.innerHTML += `
                <tr>
                    <td>${ing.fecha.substring(0,10)}</td>
                    <td>${ing.cod_producto}</td>
                    <td>${ing.descripcion}</td>
                    <td>${ing.cantidad}</td>
                    <td>
                        <button id="deleteIngreso" onclick="eliminarIngreso(${ing.id_ingreso}, '${ing.cod_producto}', ${ing.cantidad})"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            `
        })
        formIngreso.hidden = false;
        formSalida.hidden = true;
    } catch (error) {
        alert(error)
    }
};

const eliminarIngreso = async(id, cod_producto, cantidad) => {
    console.log(cod_producto)
    console.log(cantidad)
    try {
        res = await axios.post('http://localhost:3000/ingresos/delete/' + id, {
            cod_producto: cod_producto,
            cantidad: cantidad
        })
        alert(res.data)
        getIngresos()
    } catch (error) {
        alert(error)
    }
}

const getSalidas = async() => {
    try {
        let response = await axios.get("http://localhost:3000/salidas")
        tbody.innerHTML = ""
        response.data.forEach(sal => {
            tbody.innerHTML += `
                <tr>
                    <td>${sal.fecha.substring(0,10)}</td>
                    <td>${sal.cod_producto}</td>
                    <td>${sal.descripcion}</td>
                    <td>${sal.cantidad}</td>
                    <td>
                        <button id="deleteSalida" onclick="eliminarSalida(${sal.id_salida}, '${sal.cod_producto}', ${sal.cantidad})"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            `
        })
        formIngreso.hidden = true
        formSalida.hidden = false
        formularioSalida.style.display = 'none'
    } catch (error) {
        alert(error)
    }
}

const eliminarSalida = async(id, cod_producto, cantidad) => {
    try {
        res = await axios.post('http://localhost:3000/salidas/delete/' + id, {
            cod_producto: cod_producto,
            cantidad: cantidad
        })
        alert(res.data)
        getSalidas()
    } catch (error) {
        alert(error)
    }
}

btnGuardarSalida.addEventListener('click', async() => {
    if(txtFechaSalida.value == "" || txtCantidadSalida.value == ""){
        alert('Debe ingresar fecha y cantidad.')
    } else {
        try {
            res = await axios.post('http://localhost:3000/salidas', {
                fecha: txtFechaSalida.value,
                cod_producto: cboProductoSalida.value,
                cantidad: +txtCantidadSalida.value 
            })
            console.log(res.data)
            if(res.data.id === 0){
                alert(res.data.mensaje)
            } else {
                alert('Se registró con exito.')
                getSalidas()
                formularioSalida.reset()
                formularioSalida.style.display = 'none'
                btnNuevaSalida.disabled = false
            }
        } catch (error) {
            alert(error)
        }
    }
})

if(botonIngActive){
    selectBotonIngresos();
    getIngresos();
    formularioIngresos.style.display = 'none'
};
