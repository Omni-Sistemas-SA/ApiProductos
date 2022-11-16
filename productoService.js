let productos = require("./productos.json");

const productosGet = () => {
    return productos;
};

const productosSet = (producto) => {
    productos.push(producto)
    return productos
}

const productosDelete = (id) => {
    console.log(id);
    productos = productos.filter((prod) => {
        return prod.id != id;
    }
    );
    console.log(productos);
    return productos;
}

const cantidadReservada = (carrito, idProducto) => {
    for (let i = 0; i < productos.length; i++) {
        if (idProducto === productos[i].id) {
            productos[i].cantidad -= carrito.cantidad
            i = productos.length
        }
    }
    return "El producto " + idProducto + "se actualizó"
}
const productosGetId = (id) => {
    let producto = productos.find(
        (elem) => {
            return elem.id === id;
        }
    );
    return producto;
}
const listarById = (listaId) => {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
    console.log(listaId.lista)
    console.log("+++++++++++++++++++++++++++++++++++++++++++++")
    let lista = [];
    console.log("--------------Lista-------------")
    listaId.lista.forEach(element => {
        console.log(element)
        let produc = productos.find(
            (e) => {
                return e.id === element.id
            }
        )
        console.log("++++++++++++producto+++++++++++++")
        console.log(produc);
        lista.push(produc);
        console.log(lista)

    });
    return lista
}

module.exports.listarByIdExport = listarById;
module.exports.productosGetExport = productosGet;
module.exports.productosGetIdExport = productosGetId;
module.exports.productosSetExport = productosSet;
module.exports.productosDeleteExport = productosDelete;
module.exports.cantidadReservadaExport = cantidadReservada;