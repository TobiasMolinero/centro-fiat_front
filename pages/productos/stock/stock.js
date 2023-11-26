const tbody = document.querySelector('#tbody')
const txtStock = document.querySelector('#txtStock')

const txtCodProducto = document.querySelector('#txtCodProducto')
const inputCodProducto = document.querySelector('#inputCodProducto')
const inputMarca = document.querySelector('#inputMarca')
const inputDescripcion = document.querySelector('#inputDescripcion')
const inputCosto = document.querySelector('#inputCosto')
const inputVenta = document.querySelector('#inputVenta')
const inputStock = document.querySelector('#inputStock')

const inputMarcaE = document.querySelector('#inputMarcaE')
const inputDescripcionE = document.querySelector('#inputDescripcionE')
const inputCostoE = document.querySelector('#inputCostoE')
const inputVentaE = document.querySelector('#inputVentaE')
const inputStockE = document.querySelector('#inputStockE')

const btnAddProduct = document.querySelector('#btnAddProduct')
const btnEditProduct = document.querySelector('#btnEditProduct')

const formAddProduct = document.querySelector('#formAddProduct')
const formEditProduct = document.querySelector('#formEditProduct')

let idAux = ""

btnAddProduct.addEventListener('click', async() => {
    if(inputCodProducto.value === '' ||
       inputMarca.value === "" ||
       inputDescripcion.value === "" ||
       inputCosto.value === "" ||
       inputVenta.value === "" ||
       inputStock.value === ""
    ){
        alert('ATENCION: Debe llenar todos los campos.')
    } else {
        try {
            res = await axios.post('http://localhost:3000/productos/create', {
                cod_producto: inputCodProducto.value,
                marca: inputMarca.value,
                descripcion: inputDescripcion.value,
                costo: +inputCosto.value,
                precio_venta: +inputVenta.value,
                stock: +inputStock.value
            })
            alert(res.data)
            getProductos()
            formAddProduct.reset()
            closeModal()
        } catch (error) {
            alert(error)   
        }
    }
})

btnEditProduct.addEventListener('click', async() => {
    if(inputMarcaE.value === "" ||
       inputDescripcionE.value === "" ||
       inputCostoE.value === "" ||
       inputVentaE.value === "" ||
       inputStockE.value === ""
    ){
        alert('ATENCION: Debe llenar todos los campos.')
    } else {
        try {
            res = await axios.put('http://localhost:3000/productos/edit/' + idAux, {
                marca: inputMarcaE.value,
                descripcion: inputDescripcionE.value,
                costo: +inputCostoE.value,
                precio_venta: +inputVentaE.value,
                stock: +inputStockE.value
         })
         alert(res.data)
         getProductos()
         formEditProduct.reset()
         closeModal()
        } catch (error) {
         alert(error)   
     }
 }
})


const getProductos = async() => {
    try {
        res = await axios.get('http://localhost:3000/productos')
        tbody.innerHTML = ""
        res.data.forEach(p => {
            tbody.innerHTML += `
                <tr>
                    <td>${p.cod_producto}</td>
                    <td>${p.descripcion}</td>
                    <td>${p.marca}</td>
                    <td>$ ${p.costo}</td>
                    <td>$ ${p.precio_venta}</td>
                    <td id="txtStock">${p.stock}</td>
                    <td>
                        <button onclick="selectProduct('${p.cod_producto}')" id="btnSelectProd"><i class="bi bi-pencil-square"></i></button>
                        <button onclick="deleteProduct('${p.cod_producto}')" id="btnDeleteProd"><i class="bi bi-trash"></i></button>
                    </td>
                </tr>
            ` 
        })
    } catch (error) {
        alert(error)
    }
}


const deleteProduct = async(id) => {
    if(window.confirm('¿Seguro desea eliminar este registro?')){
        try {
            res = await axios.put('http://localhost:3000/productos/delete/' + id)
            alert(res.data)
            getProductos()
            alert('Registro eliminado.')
        } catch (error) {
            alert(error)
        }
    }
}

const openModalEdit = () => {
    modalEdit.style.opacity = 1;
    modalEdit.style.zIndex = 1;
    document.body.style.overflow = 'hidden';
}

const selectProduct = async(id) => {
    idAux = id
    openModalEdit()
    try {
        res = await axios.get('http://localhost:3000/productos/select/' + id)
        txtCodProducto.innerHTML = res.data[0].cod_producto;
        inputMarcaE.value = res.data[0].marca;
        inputDescripcionE.value = res.data[0].descripcion;
        inputCostoE.value = res.data[0].costo;
        inputVentaE.value = res.data[0].precio_venta;
        inputStockE.value = res.data[0].stock;
    } catch (error) {
        alert(error)
    }
}



getProductos()
