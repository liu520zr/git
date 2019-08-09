<?php

$con = mysqli_connect("127.0.0.1", "root", "", "test");
$sql = "SELECT cart.*,list.name,list.price,list.pri,list.hd1,list.src FROM cart , list WHERE cart.goodid = list.gid";
$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>