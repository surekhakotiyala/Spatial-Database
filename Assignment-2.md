###Assignment 2

###connect to mysql  database using php


<?php
$con=mysqli_connect("localhost","skotiyala","Yi0keek6","skotiyala");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT COUNT(*) FROM Planets");

echo "<table border='1'>
<tr>
<th>Name</th>
<th>NumMoons</th>
<th>Type</th>
<th>LengthOfYear</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['Name'] . "</td>";
  echo "<td>" . $row['NumMoons'] . "</td>";
  echo "<td>" . $row['Type'] . "</td>";
  echo "<td>" . $row['LengthofYear'] . "</td>";
  echo "</tr>";
}

echo "</table>";
mysqli_close($con);
?>


```
