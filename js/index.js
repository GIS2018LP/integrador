//import {defaults as defaultControls, ScaleLine} from 'ol/control.js';

var URL_OGC = '/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz'
var scaleLineCtrl = new ol.control.ScaleLine();
var map = new ol.Map({
	target: 'map',
	controls: ([
		scaleLineCtrl
	]),
	layers: [
		//planisferio base
		new ol.layer.Tile({
			title: "Natural Earth Base Map",
			source: new ol.source.TileWMS({
				url: 'http://demo.boundlessgeo.com/geoserver/wms',
				params: {'LAYERS': 'ne:ne'}
			})
		}),
		//capas argentas
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Actividades agropecuarias",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'actividades_agropecuarias'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Actividades económicas",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'actividades_economicas'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Conplejo de energía",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'complejo_de_energia_ene'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Cursos de agua",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'curso_de_agua_hid'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Curvas de nivel",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'curvas_de_nivel'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios turísticos",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_construcciones_turisticas'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios deportivos y de esparcimiento",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_depor_esparcimiento'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios educativos",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_educacion'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios religiosos",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_religiosos'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificio de salud",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_de_salud_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios de seguridad",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_de_seguridad_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios públicos",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_publico_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios ferroviarios",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificios_ferroviarios'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Éjido",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'ejido'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Espejos de agua",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'espejo_de_agua_hid'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Estructuras portuarias",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'estructuras_portuarias'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Infraestructura aeroportuaria",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'infraestructura_aeroportuaria_punto'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Infraestructura hídrica",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'infraestructura_hidro'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Islas",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'isla'}//por defecto version WMS = 1.3.0
			})
		}),
	],
	view: new ol.View({
		projection: 'EPSG:4326',
		center: [-59, -27.5],
		zoom: 4
	})
})

