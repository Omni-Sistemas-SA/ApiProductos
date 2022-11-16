const express = require("express");
const cors = require("cors");
const body_parse = require("body-parser");
const path = require("path");

//se importa los servicios
const productoService = require("./productoService");


const app = express();
const port = 8081;

app.use(cors());
app.use(body_parse.json());

const pathName = "/";
const pathAdmin = pathName + "admin";

app.get(pathName,
    (req, res) => {
        console.log("Se recibió la petición GET");
        console.log(req);
        res.send(productoService.productosGetExport());
    }
);

app.get(pathAdmin,
    (req, res) => {
        console.log("Se recibió la petición GET");
        console.log(req);
        res.send(productoService.productosGetExport());
    }
);
app.get(pathName,
    (req, res) => {
        console.log("Se recibió la peticion GET");
        console.log(req);
        let id = req.query.id
        res.send(productoService.productosGetIdExport(id))
    }
)
app.post(pathAdmin,
    (req, res) => {
        console.log("Se recibió la petición POST");
        console.log(req.body);
        let productos = productoService.productosSetExport(req.body)
        res.send({ "mensaje": "Producto Guardado", "productos": productos })
    }
)
app.delete(pathAdmin,
    (req, res) => {
        console.log("Se recibió la petición DELETE")
        let id = req.query.id;
        let productos = productoService.productosDeleteExport(id);
        res.send({ "mensaje": "Producto eliminado", "productos": productos });
    }
)
app.patch(pathName + "cantidad",
    (req, res) => {
        console.log("productos en carrito");
        console.log(req.body);
        let id = req.query.id;
        res.send(productoService.cantidadReservadaExport(req.body, id))
    }
)
app.get(pathName + "carrito/productos",
    (req, res) => {
        console.log("Se recibió la peticion de la lista de productos")
        console.log(req.query)
        let lista = productoService.listarByIdExport(req.query)
        res.send(lista)
    }
)

app.listen(port,
    () => {
        console.log("Subio el app productos en el puerto " + port)
    }
)