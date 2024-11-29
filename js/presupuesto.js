document.getElementById("presupuesto-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
  
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const producto = document.getElementById("producto").value;
    const extra1 = document.getElementById("extra1").checked;
    const extra2 = document.getElementById("extra2").checked;
  
    let formIsValid = true;
    let errorMessage = "";
  
    // Validar el nombre
    if (nombre === "") {
      errorMessage += "El nombre es obligatorio.\n";
      formIsValid = false;
    }
  
    // Validar la selección del producto
    if (producto === "") {
      errorMessage += "Por favor, selecciona un producto.\n";
      formIsValid = false;
    }
  
    // Si no se seleccionan extras, podemos calcular el presupuesto sin ellos
    let extrasCost = 0;
    if (extra1) {
      extrasCost += 10; // Extra 1 cuesta 10€
    }
    if (extra2) {
      extrasCost += 20; // Extra 2 cuesta 20€
    }
  
    // Si el formulario es válido, calcular el presupuesto
    if (formIsValid) {
      const productoPrice = parseInt(producto); // Convertimos el precio del producto a número
      const totalPresupuesto = productoPrice + extrasCost;
      
      // Mostrar el presupuesto final
      document.getElementById("presupuestoFinal").innerHTML = `
        <h3>Presupuesto Final</h3>
        <p>Nombre: ${nombre}</p>
        <p>Producto seleccionado: ${productoPrice}€</p>
        <p>Extras seleccionados: ${extrasCost}€</p>
        <p><strong>Total: ${totalPresupuesto}€</strong></p>
      `;
    } else {
      // Si el formulario no es válido, mostrar el mensaje de error
      alert(errorMessage);
    }
  });
  