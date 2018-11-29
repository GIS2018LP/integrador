layers = map.getLayers();

for (j=2; layer = map.getLayers().getArray()[j]; j++){
    var op = document.createElement("option");
    var selec = document.getElementById("capaConsulta")
    op.setAttribute("id", "opt_" + layer.get("title"));
    op.setAttribute("value", layer.get("name"));
    op.setAttribute("text",  layer.get("title"));

    selec.appendChild(op);

    op.innerHTML = layer.get("title");

}