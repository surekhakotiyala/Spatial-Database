
<?php
//Establish connection to database.
$db = new mysqli('localhost', 'skotiyala', 'Yi0keek6', 'skotiyala');

//If no connection, then kill page
if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
}
?>
