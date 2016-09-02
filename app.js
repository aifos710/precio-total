window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
		var precio = parseInt(document.getElementById("precio").value);
		var cantidad = parseInt(document.getElementById("cantidad").value);
		var descuento = parseInt(document.getElementById("descuento").value);
		var resultado = document.getElementById("resultado");
		resultado.innerHTML = "<p>Total a pagar es  " + totalPagar(precio,cantidad,descuento) + "</p>";
	});

	function totalPagar(precio,cantidad,descuento) {
		return (precio*cantidad *(1-descuento/100));
	}
});