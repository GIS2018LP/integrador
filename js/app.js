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
	var br = document.createElement("br");
	lbl.setAttribute("for", chk.id);
	panel.appendChild(chk);
	//panel.appendChild(lbl);
	//panel.appendChild(br);
	lbl.innerHTML = layer.get("title");
	//panel.appendChild(br);

	var imag = document.createElement("IMG"); 
	imag.setAttribute("src", 'http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz&SERVICE=WMS&REQUEST=GetLegendGraphics&FORMAT=image/png&LAYERS=' + layer.get("name"));
	// imag.setAttribute("width", "10px");
	// imag.setAttribute("height", "10px");
	panel.appendChild(imag);
	panel.appendChild(br);
};
//toggle
function toggle(chk){
	layers.forEach(function(layer) {
		if (chk.id.slice(4) == layer.get("title")){
			layer.setVisible(chk.checked);
		}
	});
}



