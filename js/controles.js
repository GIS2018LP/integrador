//BETO
var capa;


var raster = new ol.layer.Tile({
    source: new ol.source.OSM()
});

var source = new ol.source.Vector();


var vector = new ol.layer.Vector({
    source: source,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
            color: '#ffcc33',
            width: 2
        }),
        image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
                color: '#ffcc33'
            })
        })
    })
});



/**
* Currently drawn feature.
* @type {ol.Feature}
*/
var sketch;


/**
* The help tooltip element.
* @type {Element}
*/
var helpTooltipElement;


/**
* Overlay to show the help messages.
* @type {ol.Overlay}
*/
var helpTooltip;


/**
* The measure tooltip element.
* @type {Element}
*/
var measureTooltipElement;


/**
* Overlay to show the measurement.
* @type {ol.Overlay}
*/
var measureTooltip;


/**
* Message to show when the user is drawing a polygon.
* @type {string}
*/
var continuePolygonMsg = 'Click para continuar dibujando el polígono';


/**
* Message to show when the user is drawing a line.
* @type {string}
*/
var continueLineMsg = 'Click para continuar dibujando la línea';


/**
* Handle pointer move.
* @param {ol.MapBrowserEvent} evt The event.
*/
var pointerMoveHandler = function (evt) {
    if (evt.dragging) {
        return;
    }
    /** @type {string} */
    var helpMsg = 'Click para empezar a dibujar';

    if (sketch) {
        var geom = (sketch.getGeometry());
        if (geom instanceof ol.geom.Polygon) {
            helpMsg = continuePolygonMsg;
        } else if (geom instanceof ol.geom.LineString) {
            helpMsg = continueLineMsg;
        }
    }

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(evt.coordinate);

    helpTooltipElement.classList.remove('hidden');
};


























//creo un source de tipo Vector
// var vectorSource = new ol.source.Vector({
//     //formato de los datos a consumir
//     format: new ol.format.GeoJSON(),
//     //url del archivo o script que genera el GeoJSON
//     url:'espejos_de_agua.geojson'
// });

// //creo una capa de tipo vector
// var vectorLayer = new ol.layer.Vector({
//     //asigno el source
//     source: vectorSource,
//     visible:false,

//     //estilo
// 	style: new ol.style.Style({
// 		//relleno (solo si hay poligonos)
// 		fill: new ol.style.Fill({
// 			color: 'rgba(255, 204, 51, 0.4)'
// 		}),
// 		//trazo (para poligonos y lineas)
// 		stroke: new ol.style.Stroke({
// 			color: '#ffcc33',
// 			width: 2
// 		}),
// 		//image: para puntos
// 		image: new ol.style.Circle({
// 			radius: 7,//radio en pixeles
// 			//relleno
// 			fill: new ol.style.Fill({
// 				color: '#ffcc33'
// 			}),
// 			//trazo
// 			stroke: new ol.style.Stroke({
// 				color: '#000000',
// 				width: 1
// 			})
// 		})
// 	})
// });



// var red_vial = new ol.layer.Image({
//     title: "Red Vial",
//     //capa desactivada por defecto
//     visible: false,
//     source: new ol.source.ImageWMS({
//         url: URL_OGC,
//         params: {LAYERS: 'red_vial'}
//     })
// });
// var veg_culti = new ol.layer.Image({
//     title: "Vegetacion Cultivos",
//     visible: false,
//     source: new ol.source.ImageWMS({
//         url: URL_OGC,
//         params: {LAYERS: 'veg_cultivos'}
//     })
// });
// var veg_arbo = new ol.layer.Image({
//     title: "Vegetacion Arborea",
//     visible: false,
//     source: new ol.source.ImageWMS({
//         url: URL_OGC,
//         params: {LAYERS: 'veg_arborea'}
//     })
// });



//BETO
// var romper = new ol.layer.Image({
//     title: "Capa para romper",
//     //capa desactivada por defecto
//     visible: false,
//     source: new ol.source.ImageWMS({
//         url: URL_OGC,
//         params: {LAYERS: 'romper'}
//     })
// });


var romper = map.getLayers().getArray()[1];
// for (j=1; layer = map.getLayers().getArray()[j]; j++){
//     if (layer.get("title") == "Capa para romper"){
//         romper = layer;
//     }
// }






// var map = new ol.Map({
//     target: 'map',
//     layers: [
//         new ol.layer.Tile({
//             title: "Natural Earth Base Map",
//             source: new ol.source.TileWMS({
//                 url: 'http://demo.boundlessgeo.com/geoserver/wms',
//                 params: {LAYERS: 'ne:ne', VERSION: '1.1.1'}
//             })
//         }),
//         red_vial,
//         //Agrego dos capas WMS mas
//         veg_culti,
//         veg_arbo,


//         //BETO
//         romper,




//         //agregi ka caoa vectorial
//         vectorLayer

//     ],
//     view: new ol.View({
//         projection: 'EPSG:4326',
//         center: [-59, -27.5],
//         zoom: 4

//     })
// });













//BETO

//CORREGIDO
//NO FUNCIONA
//map.on('pointermove', pointerMoveHandler);

// map.getViewport().addEventListener('mouseout', function () {
//     helpTooltipElement.classList.add('hidden');
// });

var typeSelect = document.getElementById('type');

var draw; // global so we can remove it later





/**
* Format length output.
* @param {ol.geom.LineString} line The line.
* @return {string} The formatted length.
*/
var formatLength = function (line) {
    var length = ol.Sphere.getLength(line);
    var output;
    if (length < 0.5) {
        output = (Math.round(length * 10000000) / 100) +
            ' ' + 'm';
    } else {
        output = (Math.round(length * 10000) / 100) +
            ' ' + 'km';
    }
    return output;
};


/**
* Format area output.
* @param {ol.geom.Polygon} polygon The polygon.
* @return {string} Formatted area.
*/
var formatArea = function (polygon) {
    var area = ol.Sphere.getArea(polygon);
    var output;
    if (area > 10000) {
        output = (Math.round(area / 1000000 * 100) / 100) +
            ' ' + 'km<sup>2</sup>';
    } else {
        output = (Math.round(area * 1000000) / 100) +
            ' ' + 'km<sup>2</sup>';
    }
    return output;
};










//var capas = [red_vial, veg_culti, veg_arbo, vectorLayer];








 //CORREGIDO (las 2 primeras lineas no las copié)
 //NO FUNCIONA.. ESTO HACE QUE NO SE VEAN LAS CAPAS
 //VER

// function addInteraction() {
//     var type = (typeSelect.value == 'area' ? 'Polygon' : 'LineString');
//     draw = new ol.interaction.Draw({
//         source: source,
//         type: /** @type {ol.geom.GeometryType} */ (type),
//         style: new ol.style.Style({
//             fill: new ol.style.Fill({
//                 color: 'rgba(255, 255, 255, 0.2)'
//             }),
//             stroke: new ol.style.Stroke({
//                 color: 'rgba(0, 0, 0, 0.5)',
//                 lineDash: [10, 10],
//                 width: 2
//             }),
//             image: new ol.style.Circle({
//                 radius: 5,
//                 stroke: new ol.style.Stroke({
//                     color: 'rgba(0, 0, 0, 0.7)'
//                 }),
//                 fill: new ol.style.Fill({
//                     color: 'rgba(255, 255, 255, 0.2)'
//                 })
//             })
//         })
//     });

//CORREGIDO TAMBIEN            
// map.addInteraction(draw);




//MOVIDO ABAJO.. A SELECCIONARCONTROL
//createMeasureTooltip();
//createHelpTooltip();







//MOVIDO ABAJO
//var listener;




//CORREGIDO
//NO FUNCIONA.. NO SE VEN LAS CAPAS

// draw.on('drawstart',
// function (evt) {
//     // set sketch
//     sketch = evt.feature;

//     /** @type {ol.Coordinate|undefined} */
//     var tooltipCoord = evt.coordinate;

//     listener = sketch.getGeometry().on('change', function (evt) {
//         var geom = evt.target;
//         var output;
//         if (geom instanceof ol.geom.Polygon) {
//             output = formatArea(geom);
//             tooltipCoord = geom.getInteriorPoint().getCoordinates();
//         } else if (geom instanceof ol.geom.LineString) {
//             output = formatLength(geom);
//             tooltipCoord = geom.getLastCoordinate();
//         }
//         measureTooltipElement.innerHTML = output;
//         measureTooltip.setPosition(tooltipCoord);
//     });
// }, this);





//CORREGIDO
//NO FUNCIONA.. NO SE VEN LAS CAPAS

// draw.on('drawend',
//     function () {
//         measureTooltipElement.className = 'tooltip tooltip-static';
//         measureTooltip.setOffset([0, -7]);
//         // unset sketch
//         sketch = null;
//         // unset tooltip so that a new one can be created
//         measureTooltipElement = null;
//         createMeasureTooltip();
//         ol.Observable.unByKey(listener);
//     }, this);








/**
* Let user change the geometry type.
*/
typeSelect.onchange = function () {
    map.removeInteraction(draw);
    //addInteraction();
    addInteraction();
};




//CREO QUE ESTO NO VA.. LO QUE CREO QUE HARIA ES, COMO ARRIBA A ADDINTERACTION SE 
//LE ASIGNO LA INTERACCION DRAW, LA METERIA NOMAS.. PERO ABAJO LO HAGO MANUALMENTE..
//.. CREO
//NO FUNCIONA.. NO SE VEN LAS CAPAS

//addInteraction();
























//function que va a realizar la peticion de la consulta
var consultar = function(coordinate, capa){

    
    if (capa == 'undefined'){
        alert('Para la consulta debe estar seleccionada una capa');
    }else{

        console.log(coordinate);
        if(coordinate.length==2){
            //es un punto [lon,lat]
            var wkt='POINT('+coordinate[0]+' ' +coordinate[1]+')';

            url = 'consultapunto.php?wkt='+wkt+'&capa='+capa + '&zoomActual=' + zoomActual;

            $(".modal-consulta-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');

            $("#consulta").modal("show");

            //window.open('consultapunto.php?wkt='+wkt+'&capa='+capa + '&zoomActual=' + zoomActual);
            //return;

        }else{
            //es un poligono en la forma [ [ [lon,lat],[lon,lat],....] ]
            var wkt = 'POLYGON((';
            for(var i=0;i<coordinate[0].length - 1;i++){
                wkt+=coordinate[0][i][0]+ ' ' + coordinate[0][i][1]+ ',';
            }
            wkt+=coordinate[0][0][0]+' '+coordinate[0][0][1]+'))';

            url = 'consulta.php?wkt='+wkt+'&capa='+capa;
            
            //$("#consulta").html('<object width="100%" height="100%" type="text/html" data="url" ></object>').foundation("open");

            $(".modal-consulta-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');

            $("#consulta").modal("show");

            //window.open('consulta.php?wkt='+wkt+'&capa='+capa);return;

        }
        console.log(wkt);
        
        

        //window.open('consulta.php?wkt='+wkt+'&capa='+capa);return;

            // jQuery.ajax({
            //     url:'consulta.php',
            //     method: 'GET',
            //     data:{
            //         wkt:wkt
            //     },
            //     success:function(data){
            //         console.log(data);
            //     }
            // });
    }      


};













var coordInsertar;


//BETO
function insertarDatos() {


   

        //console.log(coordinate);
        
        //es un punto [lon,lat]
        var punto = coordInsertar;
        
        //console.log(punto);


        var nombre = document.getElementById('formDatosNombre').value;
        var tipo = document.getElementById('formDatosTipo').value;
        var situacion = document.getElementById('formDatosSituacion').value;

        var sel = document.getElementById("formDatosPrecision");
        var precision = sel.options[sel.selectedIndex].text;

        var fuente = document.getElementById('formDatosFuente').value;
        var operador = document.getElementById('formDatosOperador').value;
        var responsable = document.getElementById('formDatosResponsable').value;
        var cargo = document.getElementById('formDatosCargo').value;




        url = 'insertar.php?punto=' + punto + '&nombre=' + nombre + '&tipo=' + tipo + '&situacion=' + situacion + '&precision=' + precision + '&fuente=' + fuente +  '&operador=' + operador + '&responsable=' + responsable + '&cargo=' + cargo;

        $(".modal-consulta-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');

        $("#consulta").modal("show");


        //window.open('insertar.php?punto=' + punto + '&nombre=' + nombre + '&tipo=' + tipo + '&situacion=' + situacion + '&precision=' + precision + '&fuente=' + fuente +  '&operador=' + operador + '&responsable=' + responsable + '&cargo=' + cargo + '_self');
        //return; 

        // jQuery.ajax({
        //     url:'consulta.php',
        //     method: 'GET',
        //     data:{
        //         wkt:wkt
        //     },
        //     success:function(data){
        //         console.log(data);
        //     }
        // });
    


};



function mostrarInsercionExitosa(){
    //console.log("Llama a funcion mostrarModal()");
    //$("#add-card").modal("hide");
    //console.log("Llegó a esconder primer modal");
    $("#insercionExitosa").modal("show");
    //console.log("Llegó a abrir segunda modal");
}








var selectInteraction = new ol.interaction.DragBox(
    {
        condition: ol.events.condition.always, //noModifierKeys
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: [0, 0, 255, 1]
            })
        })
    }
);




selectInteraction.on('boxend', function (evt) {
    //this: referencia al selectInteraction
    console.log('boxend', this.getGeometry().getCoordinates());

    var selCapa = document.getElementById("capaConsulta");
    capa = selCapa.options[selCapa.selectedIndex].value;
    consultar(selectInteraction.getGeometry().getCoordinates(), capa);

});



















//BETO

//TODO ESTO ES LA FUNCION
function addInteraction() {
    var type = (typeSelect.value == 'area' ? 'Polygon' : 'LineString');
    draw = new ol.interaction.Draw({
        source: source,
        type: /** @type {ol.geom.GeometryType} */ (type),
        style: new ol.style.Style({
            fill: new ol.style.Fill({
                color: 'rgba(255, 255, 255, 0.2)'
            }),
            stroke: new ol.style.Stroke({
                color: 'rgba(0, 0, 0, 0.5)',
                lineDash: [10, 10],
                width: 2
            }),
            image: new ol.style.Circle({
                radius: 5,
                stroke: new ol.style.Stroke({
                    color: 'rgba(0, 0, 0, 0.7)'
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                })
            })
        })
    });
    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    var listener;
    draw.on('drawstart',
        function (evt) {
            // set sketch
            sketch = evt.feature;

            /** @type {ol.Coordinate|undefined} */
            var tooltipCoord = evt.coordinate;

            listener = sketch.getGeometry().on('change', function (evt) {
                var geom = evt.target;
                var output;
                if (geom instanceof ol.geom.Polygon) {
                    output = formatArea(geom);
                    tooltipCoord = geom.getInteriorPoint().getCoordinates();
                } else if (geom instanceof ol.geom.LineString) {
                    output = formatLength(geom);
                    tooltipCoord = geom.getLastCoordinate();
                }
                measureTooltipElement.innerHTML = output;
                measureTooltip.setPosition(tooltipCoord);
            });
        }, this);

    draw.on('drawend',
        function () {
            measureTooltipElement.className = 'tooltip tooltip-static';
            measureTooltip.setOffset([0, -7]);
            // unset sketch
            sketch = null;
            // unset tooltip so that a new one can be created
            measureTooltipElement = null;
            createMeasureTooltip();
            ol.Observable.unByKey(listener);


            //BETO
            //PROBANDO
            //measureTooltip = null;


        }, this);
}
//TODO ESTO ES LA FUNCION












/**
* Creates a new help tooltip
*/
function createHelpTooltip() {
    if (helpTooltipElement) {
        helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol.Overlay({
        element: helpTooltipElement,
        offset: [15, 0],
        positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
}




/**
* Creates a new measure tooltip
*/
function createMeasureTooltip() {
    if (measureTooltipElement) {
        measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol.Overlay({
        element: measureTooltipElement,
        offset: [0, -15],
        positioning: 'bottom-center'
    });
    map.addOverlay(measureTooltip);
}













var zoomActual;



//funcion para el evento click en el mapa
var clickEnMapa = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click',evt.coordinate);
    var selCapa = document.getElementById("capaConsulta");
    capa = selCapa.options[selCapa.selectedIndex].value;
    console.log(map.getView().getZoom());
    zoomActual = map.getView().getZoom();
    consultar(evt.coordinate, capa);
};





//var coordInsertar;


function insertarForm(coordinate){
    //window.location.href = document.getElementById('modalDatos').href;
    //document.location.href = document.getElementById('modalDatos').href;
    // var modal = document.getElementById("modalDatos");
    // modal.showModal();
    coordInsertar = 'POINT(' + coordinate[0] + ' ' + coordinate[1] + ')';
    // coordInsertar = coord;
    $("#add-card").modal("show");
    
}



//BETO
var clickEnMapaInsertar = function (evt) {
    //muestro por consola las coordenadas del evento
    console.log('click',evt.coordinate);
    insertarForm(evt.coordinate);
};




function verCapa(){
    var selecCapa = document.getElementById("capaConsulta");
    capaActual = selecCapa.options[selecCapa.selectedIndex].text;
    for (j=2; layer = map.getLayers().getArray()[j]; j++){
        if (layer.get("title") == capaActual){
            layer.setVisible(true);
            document.getElementById("chk_" + capaActual).checked = true;
        }
    }
}



function verSelector(){
    var radioActual = document.getElementById("controles_consulta");
    var selVer = document.getElementById("capaConsulta");
    if (radioActual.checked == true){
        selVer.style.display = "block";
    }else {
        selVer.style.display = "none";
    }
}






//function para "cambiar" de interaction en function del value de los radios
var seleccionarControl = function (el) {
    if (el.value == "consulta") {

        
        //BETO
        //LIMPIA TODAS LAS CAPAS SELECCIONADAS POR SI SE SELECCIONO MAS DE UNA 
        //CUANDO ESTABA SELECCIONADO EL CONTROL DE NAVEGACION

        //EL PROFE DIJO QUE NO ERA CONVENIENTE LIMPIAR TODAS LAS CAPAS
        // for (j=1; cap = map.getLayers().getArray()[j]; j++){
        //     cap.setVisible(false);
        // }
        
        
        map.removeInteraction(draw);
        map.un('pointermove', pointerMoveHandler);
        map.un('click', clickEnMapaInsertar);
        map.getOverlays().clear()
        romper.setVisible(false);
        map.getOverlays().clear();

        document.getElementById("capaConsulta").selectedIndex = "0";


        // var selecCapa = document.getElementById("capaConsulta");
        // capaActual = selecCapa.options[selecCapa.selectedIndex].text;
        // document.getElementById("chk_" + capaActual);

        // for (j=2; layer = map.getLayers().getArray()[j]; j++){
        //     if (layer.get("title") == capaActual){
        //         layer.setVisible(true);
        //     }
        // }
        // console.log(capaActual);



        //agrego la interaccion del dragbox
        //la cual tiene precedencia sobre las otras
        map.addInteraction(selectInteraction);

        //subscribo una funcion al evento click del mapa
        map.on('click', clickEnMapa);

    } else if (el.value == "navegacion") {
        //la remuevo...
        map.removeInteraction(selectInteraction);
        //remueveo la subscripcion de la funcion al evento click del mapa
        map.removeInteraction(draw);
        map.un('click', clickEnMapa);
        map.un('pointermove', pointerMoveHandler);
        map.un('click', clickEnMapaInsertar);
        romper.setVisible(false);

        document.getElementById("capaConsulta").selectedIndex = "0";


        //BETO
        //LIMPIAMOS LOS OVERLAYS QUE QUEDAN EN EL MAPA DESPUES DE USAR MEDICION
        //DE DISTANCIA Y AREA
        map.getOverlays().clear()



        
    }




    //BETO
    else if (el.value == "distancia") {

        //var typeSelect = document.getElementById('tipoMedida').value;
        map.removeInteraction(selectInteraction);
        map.removeInteraction(draw);
        map.un('click', clickEnMapaInsertar);
        map.un('click', clickEnMapa);
        romper.setVisible(false);
        map.getOverlays().clear()

        document.getElementById("capaConsulta").selectedIndex = "0";



        document.getElementById("opcionLength").selected = true; 

        addInteraction();

        map.on('pointermove', pointerMoveHandler);

        // createMeasureTooltip();
        // createHelpTooltip();

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });



    }

    else if (el.value == "area") {

        map.removeInteraction(selectInteraction);
        map.removeInteraction(draw);
        map.un('click', clickEnMapaInsertar);
        map.un('click', clickEnMapa);
        romper.setVisible(false);
        map.getOverlays().clear();


        document.getElementById("capaConsulta").selectedIndex = "0";

        
        
        //var typeSelect = "area";

        document.getElementById("opcionArea").selected = true; 

        addInteraction();

        map.on('pointermove', pointerMoveHandler);

        // createMeasureTooltip();
        // createHelpTooltip();

        map.getViewport().addEventListener('mouseout', function () {
            helpTooltipElement.classList.add('hidden');
        });
    }

    else if (el.value == "insertar"){


        map.removeInteraction(selectInteraction);
        map.un('pointermove', pointerMoveHandler);
        map.removeInteraction(draw);
        map.un('click', clickEnMapa);
        map.getOverlays().clear()


        document.getElementById("capaConsulta").selectedIndex = "0";


        //BETO
        //Le pongo que comience a tratar el arreglo desde la posicion 1, 
        //poque el que esta en la posicion 0 es la capa mamá..
        //Después está la otra opción de hacer a parte una variable que 
        //sea un arreglo de las capas..
        for (j=2; cap = map.getLayers().getArray()[j]; j++){
            //console.log(cap.get("title"));
            cap.setVisible(false);
            document.getElementById("chk_" + cap.get("title")).checked = false;
            
        }

        romper.setVisible(true);

        map.on('click', clickEnMapaInsertar);

    }









    //muestro por consola el valor
    console.log(el.value);
};

//visibilidad de las capas


//obtengo una referencia al elemento HTML
// var checkbox1 = document.getElementById('red_vial');
//agrego un listener al evento change del checkbox
// checkbox1.addEventListener('change', function () {
//     var checked = this.checked;
//     //seteo la propiedad "visible" de mi capa en función al valor
//     if (checked !== red_vial.getVisible()) {
//         red_vial.setVisible(checked);
//     }
// });

//agrego un listener al evento change de la
//propiedad "visible" de la capa
// red_vial.on('change:visible', function () {
//     var visible = this.getVisible();
//     //seteo el valor del checkbox
//     if (visible !== checkbox1.checked) {
//         checkbox1.checked = visible;
//     }
// });


// var checkbox2 = document.getElementById('veg_cultivos');
// checkbox2.addEventListener('change', function () {
//     var checked = this.checked;
//     if (checked !== veg_culti.getVisible()) {
//         veg_culti.setVisible(checked);
//     }
// });

// veg_culti.on('change:visible', function () {
//     var visible = this.getVisible();
//     if (visible !== checkbox2.checked) {
//         checkbox2.checked = visible;
//     }
// });

// var checkbox3 = document.getElementById('veg_arborea');
// checkbox3.addEventListener('change', function () {
//     var checked = this.checked;
//     if (checked !== veg_arbo.getVisible()) {
//         veg_arbo.setVisible(checked);
//     }
// });

// veg_arbo.on('change:visible', function () {
//     var visible = this.getVisible();
//     if (visible !== checkbox3.checked) {
//         checkbox3.checked = visible;
//     }
// });

// var checkbox4 = document.getElementById('espejo_de_agua_hid');
// checkbox4.addEventListener('change', function () {
//     var checked = this.checked;
//     if (checked !== vectorLayer.getVisible()) {
//         vectorLayer.setVisible(checked);
//     }
// });

// vectorLayer.on('change:visible', function () {
//     var visible = this.getVisible();
//     if (visible !== checkbox4.checked) {
//         checkbox4.checked = visible;
//     }
// });







/*
function activarCapa(checkboxElem){
    capa = 'red_vial';
}



function setCapa(checkboxElem) {
    if (checkboxElem.checked) {
        capa = 'red_vial';
    }
}


window.onload = function() {
    var input = document.querySelector('check_layer_1');
    if (input) {   
        input.addEventListener('change', setCapa, false);
    }
}
*/


// function consultarCapa(id){
//     if(document.getElementById(id).checked) {
//         capa = 'red_vial';
//     }else{
//         capa = undefined;
//     }
// }






//DIJO EL PROFE QUE NO LE GUSTÓ LA IDEA

// function soloUno(formu, obj) {
//     //limite = 1; //limite de checks a seleccionar
//     //num = 0;

//     if (document.getElementById('controles_consulta').checked == true){



//         if (obj.checked) {
//             for (i=0; ele=document.getElementById(formu).children[i]; i++){
//                 if (ele.checked){
//                     ele.checked = false;
                    
//                     //BETO
//                     //Le pongo que comience a tratar el arreglo desde la posicion 1, 
//                     //poque el que esta en la posicion 0 es la capa mamá..
//                     //Después está la otra opción de hacer a parte una variable que 
//                     //sea un arreglo de las capas..
//                     for (j=1; cap = map.getLayers().getArray()[j]; j++){
//                         cap.setVisible(false);
//                     }
//                 };
//             }
//         }
//         /*
//         if (num>limite){
//             obj.checked=false;
//         }
//         */
//         obj.checked = true;

//         capa = obj.id;

//     }
// }  



// var capaLeyenda;

// function mostrarModalLeyenda(boton) {

//     console.log("Entra a la funcion mostrarModalLeyenda()");

//     for (j=2; layer = map.getLayers().getArray()[j]; j++){
//         if (layer.get("name") == boton.id.slice(4)){
//             capaLeyenda = layer.get("name");
//         }
//     }

//     console.log(capaLeyenda);

//     var urlLeyenda = 'localhost/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz&SERVICE=WMS&REQUEST=GetLegendGraphics&FORMAT=image/png&LAYERS=' + capaLeyenda;
 
//     var linea = '<img src="' + urlLeyenda + '">';

//     var pagina = '<!doctype html> <html lang="en"></head><body>' + linea + '</body>';

//     $(".modal-leyenda-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true" src="'+urlLeyenda+'"></iframe>');

//     $("#modal-leyenda").modal("show");
// }