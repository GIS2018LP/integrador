			layers = map.getLayers();
			layers.forEach(function(layer) {
				var chk = document.createElement("input");
				var panel = document.getElementById("panel")
				chk.setAttribute("type", "checkbox");
				chk.setAttribute("id", "chk_" + layer.get("title"));
				chk.setAttribute("onchange", "toggle(this)");
				if (layer.getVisible()){
					chk.setAttribute("checked", "true");
				}

				var lbl = document.createElement("label");
				var br = document.createElement("br");
				lbl.setAttribute("for", chk.id);
				panel.appendChild(chk);
				panel.appendChild(lbl);
				panel.appendChild(br);
				lbl.innerHTML = layer.get("title");
			});
			//toggle
			function toggle(chk){
				layers.forEach(function(layer) {
					if (chk.id.slice(4) == layer.get("title")){
						layer.setVisible(chk.checked);
					}
				});
			}
