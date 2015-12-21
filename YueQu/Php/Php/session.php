<?php session_start(); 
// store seesion data
$_SESSION ['views']=1;
?>


<html>
<body>
<?php
//retrieve session data
echo "Pageviews=".$_SESSION['views'];
?>
</body>
</html>

<?php
session_destroy();
?>
