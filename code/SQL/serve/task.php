<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","test");
# 读取JSON文件的内容
$json = file_get_contents("../client/data.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
 {
  $src = $data[$i]["src"];
  $hd = $data[$i]["hd"];
  $hd1 = $data[$i]["hd1"];
  $hd2 = $data[$i]["hd2"];
  $name = $data[$i]["name"];
  $name1 = $data[$i]["name1"];
  $price = $data[$i]["price"];
  $pri = $data[$i]["pri"];
  $btn = $data[$i]["btn"];
  echo  $hd1;
  $sql = "INSERT INTO `list` (`gid`, `src`, `hd`, `hd1`, `hd2`, `name`, `name1`,`price`, `pri`,`btn`) VALUES ('$i', '$src', '$hd', '$hd1', '$hd2', '$name', '$name1','$price', '$pri', '$btn')";
  mysqli_query($con,$sql);
}

?>