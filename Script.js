const listaProductosArray = [];
    const formulario = document.getElementById("formulario");
    const productoInput = document.getElementById("producto");
    const cantidadInput = document.getElementById("cantidad");
    const precioInput = document.getElementById("precio");
    const listaProductos = document.getElementById("listaProductos");
    
    // Escuchar el evento de envío del formulario
    let contador = 0;
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      contador++
      const producto = productoInput.value;
      const cantidad = cantidadInput.value;
      const precio = precioInput.value;
      // Crear objeto del producto
      const nuevoObjetoProducto = {
        id: contador,
        producto: productoInput.value,

        precio: precioInput.value
      };
      listaProductosArray.push(nuevoObjetoProducto);
      console.log(listaProductosArray)

      // Crear un nuevo elemento de lista y mostrar los datos del producto
      const nuevoProducto = document.createElement("div");
      nuevoProducto.id = `producto_${contador}`;
      nuevoProducto.textContent = `ID: ${contador}, Producto: ${producto}, Cantidad: ${cantidad}, Precio: ${precio}`;
      var boton = document.createElement("button");
      boton.textContent = "Eliminar";
      boton.addEventListener("click", function() {
        document.getElementById(`producto_${contador}`).remove(); // esto va eliminar el elemento del html
        for (var i = 0; i < listaProductosArray.length; i++) {
          if (listaProductosArray[i].id === contador) {
            listaProductosArray.splice(i, 1);
            contador=i;
          }
        }
        console.log("listaProductosArray", listaProductosArray);
      });
      nuevoProducto.appendChild(boton);
      listaProductos.appendChild(nuevoProducto);

      // Restablecer los campos del formulario
      productoInput.value = "";
      cantidadInput.value = "";
      precioInput.value = "";
    });