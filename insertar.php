<?php

header('Content-type: text/html; charset=utf-8;');
$punto =  $_GET['punto'];
$nombre =  $_GET['nombre'];
$tipo =  $_GET['tipo'];
$situacion =  $_GET['situacion'];
$precision =  $_GET['precision'];
$fuente =  $_GET['fuente'];
$operador =  $_GET['operador'];
$responsable =  $_GET['responsable'];
$cargo =  $_GET['cargo'];


$link= pg_connect("host=localhost user=user password=user dbname=integrador");

// $query=<<<EOD
// SELECT * FROM $capa WHERE 
// st_intersects(
// ST_geomfromtext('$wkt',4326),
// geom
// )



$query=<<<EOD
INSERT INTO romper 
VALUES
( (SELECT MAX(gid) FROM romper) + 1, '$nombre', '$tipo', '$situacion', '$precision', 'Menor de 1:250000 a 1:500000', 92005, '$fuente', '$operador', 'Estructuras Económicas', 'Actividades Agropecuarias', '$responsable', '$cargo', '', '', '', 'Posgar94', 'WGS 84', '2010', '', '20100817', '', 0, 0, 0.000000000000000, 0, 0, 0, ST_geomfromtext('$punto',4326));



EOD;


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

	<script>
		window.top.location.href = 'ejemplo11.html'
	</script>

</body>
