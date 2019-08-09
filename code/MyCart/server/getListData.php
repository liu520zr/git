<?php
$con = mysqli_connect("127.0.0.1", "root", "", "test");
$sql = "SELECT * FROM goodList";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);
?>