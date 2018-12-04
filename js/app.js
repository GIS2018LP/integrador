layers = map.getLayers();

for (j=2; layer = map.getLayers().getArray()[j]; j++){
	var chk = document.createElement("input");
	var panel = document.getElementById("capasTuto")
	chk.setAttribute("type", "checkbox");
	chk.setAttribute("id", "chk_" + layer.get("title"));
	chk.setAttribute("onchange", "toggle(this)");
	if (layer.getVisible()){
		chk.setAttribute("checked", "true");
	}



// layers.forEach(function(layer) {
// 	var chk = document.createElement("input");
// 	var panel = document.getElementById("panel")
// 	chk.setAttribute("type", "checkbox");
// 	chk.setAttribute("id", "chk_" + layer.get("title"));
// 	chk.setAttribute("onchange", "toggle(this)");
// 	if (layer.getVisible()){
// 		chk.setAttribute("checked", "true");
// 	}

	var lbl = document.createElement("label");
	lbl.innerHTML = layer.get("title");
	var br = document.createElement("br");
	var btn = document.createElement("button");
	btn.setAttribute("id", "btn_" + layer.get("name"));
	btn.setAttribute("class", "btn btn-orange");
	btn.setAttribute("type", "button");
	btn.setAttribute("onclick", "mostrarModalLeyenda(this)");
	btn.innerHTML = "Leyenda";
	lbl.setAttribute("for", chk.id);
	my_form=document.createElement('FORM');
	panel.appendChild(chk);
	panel.appendChild(lbl);
	panel.appendChild(br);
	my_form.appendChild(btn);
	panel.appendChild(my_form);
	//panel.appendChild(btn);
	//panel.insertBefore("br", lbl);
	panel.appendChild(br);
	
	
	//panel.appendChild(br);

	//var imag = document.createElement("IMG"); 
	//imag.setAttribute("src", 'http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz&SERVICE=WMS&REQUEST=GetLegendGraphics&FORMAT=image/png&LAYERS=' + layer.get("name"));
	// imag.setAttribute("width", "10px");
	// imag.setAttribute("height", "10px");
	//panel.appendChild(imag);
	//panel.appendChild(br);
};
//toggle
function toggle(chk){
	layers.forEach(function(layer) {
		if (chk.id.slice(4) == layer.get("title")){
			layer.setVisible(chk.checked);
		}
	});
}



var capaLeyenda;

function mostrarModalLeyenda(boton) {

	//console.log("Entra a la funcion mostrarModalLeyenda()");
	
	//console.log(boton.id.slice(4));

    for (j=2; layer = map.getLayers().getArray()[j]; j++){
        if (layer.get("name") == boton.id.slice(4, boton.id.length + 1)){
            capaLeyenda = layer.get("name");
        }
    }

    //console.log(capaLeyenda);

    //var imag = 'http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz&SERVICE=WMS&REQUEST=GetLegendGraphics&FORMAT=image/png&LAYERS=' + capaLeyenda;
 
    //var linea = '<img src="' + urlLeyenda + '">';

	//var pagina = '<!doctype html> <html lang="en"></head><body>' + linea + '</body>';
	
	console.log(capaLeyenda);

    $(".modal-leyenda-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="leyenda.php?capaLeyenda=' + capaLeyenda + '"></iframe>');

    $("#modalLeyenda").modal("show");
}