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

		
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Limite Politico Administrativo",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'limite_politico_administrativo_lim'}//por defecto version WMS = 1.3.0
			})
		}),



		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Localidades",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'localidades'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Lineas De COnduccion Energetica",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'líneas_de_conducción_ene'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Marcas y Señales",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'marcas_y_señales'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Muro_Embalse",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'muro_embalse'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Obras de Comunicacion",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'obra_de_comunicación'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Obras Portuarias",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'obra_portuaria'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Otras Edificaciones",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'otras_edificaciones'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Paises Limitrofes",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'pais_lim'}//por defecto version WMS = 1.3.0
			})
		}),
		
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Provincias",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'provincias'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos de puentes red vial",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puente_red_vial_puntos'}//por defecto version WMS = 1.3.0
			})
		}),

	new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos de Alturas Topograficas",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puntos_de_alturas_topograficas'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos del Terreno",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puntos_del_terreno'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Red Ferroviaria",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'red_ferroviaria'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Red Vial",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'red_vial'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Salvado de Obstaculo",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'salvado_de_obstaculo'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Señalizaciones",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'señalizaciones'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Congelado",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_congelado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Consolidado",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_consolidado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Costero",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_costero'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Hidromorfologico",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_hidromorfologico'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo No Consolidado",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_no_consolidado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Arborea",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_arborea'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Arbustiva",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_arbustiva'}//por defecto version WMS = 1.3.0
			})
		}),
		
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Hidrofila",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_hidrofila'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion de Suelo Desnudo",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_suelo_desnudo'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vias Secundarias",
			visible: false,
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'vias_secundarias'}//por defecto version WMS = 1.3.0
			})
		}),
				
		
	],
	view: new ol.View({
		projection: 'EPSG:4326',
		center: [-59, -27.5],
		zoom: 4
	})
})

