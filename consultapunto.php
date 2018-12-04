<?php

header('Content-type: text/html; charset=utf-8;');
$wkt =  $_GET['wkt'];
$capa =  $_GET['capa'];
$zoomActual =  $_GET['zoomActual'];


$link= pg_connect("host=localhost user=user password=user dbname=integrador");


if ($zoomActual <= 3){
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 1)
EOD;
}


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
	case 9:
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.01)
EOD;
break;
}



if ($zoomActual >= 10){
	$query=<<<EOD
	SELECT * FROM $capa 
	WHERE 
	ST_DWithin(ST_geomfromtext('$wkt',4326), $capa.geom, 0.0025)
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




//echo $query;
$result = pg_query($query);

$nro_campos = pg_num_fields($result);
$nro_registros = pg_num_rows($result);

$header = '<tr>';
while ($i < $nro_campos) { 
	$fieldName = pg_field_name($result, $i); 
	
	if($fieldName!='geom'){
		$header.= '<th>' . $fieldName .'</th>'; 
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
		table {
			border-collapse: collapse;
			width: 100%;
		}

		th, td {
			text-align: left;
			padding: 8px;
		}

		tr:nth-child(even){background-color: #f2f2f2}

		th {
			background-color: #ffcc33;
			color: white;
		}
		tr:hover {background-color:#ffebcc;}
	</style>
	</head>
<body>

<h3>Nro. Registros: <?php echo $nro_registros;?></h3>
<table cellpading=0 cellspacing=0>
<?php echo $header ?>
<?php echo $cuerpo ?>
</table>


<!--
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
	-->



</body>
