<!DOCTYPE html>
<!-- output html for the document -->
<html>
<head>
<meta name="author" content="CyberError"/>
<?php 
/*
 * Example of Hello World in php.
 * @author CyberError
 */
// Form for inputing a name:
function output_html($name){
echo<<<END
<title>Hello $name</title>
</head>
<body>
<form method="GET">
<input type="text" name="name" placeholder="Name" />
<input type="submit" />
</form>
END;
}
// Is name being input?
if(isset($_GET['name']) or isset($_POST['name'])){
@$name = $_GET['name'] ?: $_POST['name'];
output_html($name);
echo("Hello ".$name);
}else{
// If not echo Hello World
output_html("World");
echo("Hello World");
}
?>
</body>
</html>	
