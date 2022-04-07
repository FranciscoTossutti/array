


class Producto {
    constructor(nombre, precio, id, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.stock = stock;
        
    }
}

const productos = [];

productos.push(new Producto("Televisor",79,123,true));
productos.push(new Producto("Auriculares",29,1234,true));
productos.push(new Producto("Parlantes",69,12345,true));
productos.push(new Producto("Monitores",129,123456,true));
productos.push(new Producto("Buds",19,1234567,false));

console.log(productos);

function buscarProducto(item, producto){
    return item.find(objeto => objeto.nombre === producto);
}
for (let index = 0; index < 4; index++) {
    let busqueda = buscarProducto(productos, prompt('Ingresar producto'));
    if(busqueda != undefined){
        alert('Producto: '+busqueda.nombre+', Precio:$ '+busqueda.precio+', Stock: '+busqueda.stock);
    }else{
        alert('No existe ese producto.');
    }
}


