//import {defaults as defaultControls, ScaleLine} from 'ol/control.js';

var URL_OGC = '/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/asd.qgs'
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
				params: {'LAYERS': 'ne:ne', VERSION: '1.1.1'}
			})
		}),


		// //BETO
		//CAPA PARA INSERTAR DATOS
		new ol.layer.Image({
			title: "Capa para romper",
			//capa desactivada por defecto
			visible: false,
			name: 'romper',
			source: new ol.source.ImageWMS({
				url: URL_OGC,
				params: {LAYERS: 'romper'}
			})
		}),




		//capas argentas
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Actividades agropecuarias",
			visible: false,
			name: 'actividades_agropecuarias',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'actividades_agropecuarias'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Actividades económicas",
			visible: false,
			name: 'actividades_economicas',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'actividades_economicas'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Conplejo de energía",
			visible: false,
			name: 'complejo_de_energia_ene',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'complejo_de_energia_ene'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Cursos de agua",
			visible: false,
			name: 'curso_de_agua_hid',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'curso_de_agua_hid'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Curvas de nivel",
			visible: false,
			name: 'curvas_de_nivel',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'curvas_de_nivel'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios turísticos",
			visible: false,
			name: 'edif_construcciones_turisticas',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_construcciones_turisticas'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios deportivos y de esparcimiento",
			visible: false,
			name: 'edif_depor_esparcimiento',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_depor_esparcimiento'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios educativos",
			visible: false,
			name: 'edif_educacion',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_educacion'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios religiosos",
			visible: false,
			name: 'edif_religiosos',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edif_religiosos'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificio de salud",
			visible: false,
			name: 'edificio_de_salud_ips',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_de_salud_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios de seguridad",
			visible: false,
			name: 'edificio_de_seguridad_ips',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_de_seguridad_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios públicos",
			visible: false,
			name: 'edificio_publico_ips',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificio_publico_ips'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Edificios ferroviarios",
			visible: false,
			name: 'edificios_ferroviarios',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'edificios_ferroviarios'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Éjido",
			visible: false,
			name: 'ejido',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'ejido'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Espejos de agua",
			visible: false,
			name: 'espejo_de_agua_hid',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'espejo_de_agua_hid'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Estructuras portuarias",
			visible: false,
			name: 'estructuras_portuarias',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'estructuras_portuarias'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Infraestructura aeroportuaria",
			visible: false,
			name: 'infraestructura_aeroportuaria_punto',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'infraestructura_aeroportuaria_punto'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Infraestructura hídrica",
			visible: false,
			name: 'infraestructura_hidro',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'infraestructura_hidro'}//por defecto version WMS = 1.3.0
			})
		}),
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Islas",
			visible: false,
			name: 'isla',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'isla'}//por defecto version WMS = 1.3.0
			})
		}),

		
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Limite Politico Administrativo",
			visible: false,
			name: 'limite_politico_administrativo_lim',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'limite_politico_administrativo_lim'}//por defecto version WMS = 1.3.0
			})
		}),



		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Localidades",
			visible: false,
			name: 'localidades',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'localidades'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Lineas De COnduccion Energetica",
			visible: false,
			name: 'líneas_de_conducción_ene',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'líneas_de_conducción_ene'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Marcas y Señales",
			visible: false,
			name: 'marcas_y_señales',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'marcas_y_señales'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Muro_Embalse",
			visible: false,
			name: 'muro_embalse',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'muro_embalse'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Obras de Comunicacion",
			visible: false,
			name: 'obra_de_comunicación',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'obra_de_comunicación'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Obras Portuarias",
			visible: false,
			name: 'obra_portuaria',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'obra_portuaria'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Otras Edificaciones",
			visible: false,
			name: 'otras_edificaciones',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'otras_edificaciones'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Paises Limitrofes",
			visible: false,
			name: 'pais_lim',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'pais_lim'}//por defecto version WMS = 1.3.0
			})
		}),
		
		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Provincias",
			visible: false,
			name: 'provincias',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'provincias'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos de puentes red vial",
			visible: false,
			name: 'puente_red_vial_puntos',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puente_red_vial_puntos'}//por defecto version WMS = 1.3.0
			})
		}),

	new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos de Alturas Topograficas",
			visible: false,
			name: 'puntos_de_alturas_topograficas',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puntos_de_alturas_topograficas'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Puntos del Terreno",
			visible: false,
			name: 'puntos_del_terreno',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'puntos_del_terreno'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Red Ferroviaria",
			visible: false,
			name: 'red_ferroviaria',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'red_ferroviaria'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Red Vial",
			visible: false,
			name: 'red_vial',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'red_vial'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Salvado de Obstaculo",
			visible: false,
			name: 'salvado_de_obstaculo',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'salvado_de_obstaculo'}//por defecto version WMS = 1.3.0
			})
		}),


		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Señalizaciones",
			visible: false,
			name: 'señalizaciones',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'señalizaciones'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Congelado",
			visible: false,
			name: 'sue_congelado',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_congelado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Consolidado",
			visible: false,
			name: 'sue_consolidado',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_consolidado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Costero",
			visible: false,
			name: 'sue_costero',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_costero'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo Hidromorfologico",
			visible: false,
			name: 'sue_hidromorfologico',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_hidromorfologico'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Suelo No Consolidado",
			visible: false,
			name: 'sue_no_consolidado',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'sue_no_consolidado'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Arborea",
			visible: false,
			name: 'veg_arborea',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_arborea'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Cultivos",
			visible: false,
			name: 'veg_cultivos',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_cultivos'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Hidrofila",
			visible: false,
			name: 'veg_hidrofila',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_hidrofila'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion Arbustiva",
			visible: false,
			name: 'veg_arbustiva',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_arbustiva'}//por defecto version WMS = 1.3.0
			})
		}),
		

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vegetacion de Suelo Desnudo",
			visible: false,
			name: 'veg_suelo_desnudo',
			source: new ol.source.ImageWMS({//fuente de datos (ImageWMS)
				url: URL_OGC,
				params: {LAYERS: 'veg_suelo_desnudo'}//por defecto version WMS = 1.3.0
			})
		}),

		new ol.layer.Image({//objeto capa de tipo Imagen (1 sola imagen)
			title: "Vias Secundarias",
			visible: false,
			name: 'vias_secundarias',
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

