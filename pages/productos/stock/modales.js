const btnNewProduct = document.querySelector('#btnNewProduct');
const modalAdd = document.querySelector('#modalAdd');
const modalEdit = document.querySelector('#modalEdit');




const closeModal = () => {
    modalAdd.style.opacity = 0;
    modalAdd.style.zIndex = -1;
    modalEdit.style.opacity = 0;
    modalEdit.style.zIndex = -1;
}

btnNewProduct.addEventListener('click', () => {
    modalAdd.style.opacity = 1;
    modalAdd.style.zIndex = 1;
    document.body.style.overflow = hidden;
})