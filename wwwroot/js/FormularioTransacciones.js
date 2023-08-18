function inicializarFormularioTransacciones(urlObtenerCategorias) {
    $("#TipoOperacionId").change(async function () {
        const valorSeleccionado = $(this).val();

        const respuesta = await fetch(urlObtenerCategorias, {
            method: 'POST',
            body: valorSeleccionado,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await respuesta.json();
        console.log(json);
        //Estas opciones rellenan el Select de categorias
        //.map itera el json´y acomoda cada objeto en una etiqueta option
        const opciones = json.map(categoria => `<option value=${categoria.value} >${categoria.text}</option>`);
        $("#CategoriaId").html(opciones);
    })
}