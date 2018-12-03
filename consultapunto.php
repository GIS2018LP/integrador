<?php

header('Content-type: text/html; charset=utf-8;');
$wkt =  $_GET['wkt'];
$capa =  $_GET['capa'];
$zoomActual =  $_GET['zoomActual'];


$link= pg_connect("host=localhost user=user password=user dbname=integrador");


switch ($zoomActual){
	case 4:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.5)
EOD;
break;
	case 5:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.25)
EOD;
break;
	case 6:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.12)
EOD;
break;
	case 7:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.06)
EOD;
break;
	case 8:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.03)
EOD;
break;
}



if ($zoomActual >= 9){
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.01)
EOD;
}


// if ($zoomActual == 4){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.5)
// EOD;
// }else if ($zoomActual == 5){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.25)
// EOD;
// }else if ($zoomActual == 6){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.12)
// EOD;
// }else if ($zoomActual == 7){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.06)
// EOD;
// }else if ($zoomActual == 8){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.03)
// EOD;
// }else if ($zoomActual >= 9){
// 	$query=<<<EOD
// 	SELECT * FROM $capa 
// 	WHERE 
// 	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.01)
// EOD;
// }




echo $query;
$result = pg_query($query);

$nro_campos = pg_num_fields($result);
$nro_registros = pg_num_rows($result);

$header = '<tr>';
while ($i < $nro_campos) { 
	$fieldName = pg_field_name($result, $i); 
	
	if($fieldName!='geom'){
		$header.= '<td>' . $fieldName .'</td>'; 
	}
	$i++; 
	
}
$header .= '</tr>';

$cuerpo='';
while ($row = pg_fetch_row($result)) { 
	$cuerpo.= '<tr>'; 
	$count = count($row); 
	$i=0;
	while ($i < $nro_campos) { 
		 if(pg_field_name($result, $i)!='geom'){
			 $cuerpo.= '<td>' . $row[$i] . '</td>';
		}
		$i++;
	} 
	$cuerpo.= '</tr>'; 
	
}



?>
<!doctype html>
<html lang="en">
		<style>
			body, table{
				font-family: Arial, Helvetica, sans-serif;
				font-size: 11px;			
			}
		</style>
	</head>
<body>

<h3>Nro. Registros: <?php echo $nro_registros;?></h3>
<table border=1 cellpading=0 cellspacing=0>
<?php echo $header ?>
<?php echo $cuerpo ?>
</table>
</body>
