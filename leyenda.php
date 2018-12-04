<?php

header('Content-type: text/html; charset=utf-8;');
$capaLeyenda =  $_GET['capaLeyenda'];


$link= pg_connect("host=localhost user=user password=user dbname=integrador");



?>
<!doctype html>
<html lang="en">
	
	</head>
<body>

    <img src="http://localhost/cgi-bin/qgis_mapserv.fcgi?map=/var/www/html/integrador/integrador.qgz&SERVICE=WMS&REQUEST=GetLegendGraphics&FORMAT=image/png&LAYERS=<?php echo $capaLeyenda;?>" 
    style="height: 100%; width: 100%;">

</body>
