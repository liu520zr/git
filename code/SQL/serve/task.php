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
  $small1 = $data[$i]["small1"];
  $small2 = $data[$i]["small2"];
  $small3 = $data[$i]["small3"];
  $small4 = $data[$i]["small4"];
  $small5 = $data[$i]["small5"];
  $middle1 = $data[$i]["middle1"];
  $middle2 = $data[$i]["middle2"];
  $middle3 = $data[$i]["middle3"];
  $middle4 = $data[$i]["middle4"];
  $middle5 = $data[$i]["middle5"];
  $big1 = $data[$i]["big1"];
  $big2 = $data[$i]["big2"];
  $big3 = $data[$i]["big3"];
  $big4 = $data[$i]["big4"];
  $big5 = $data[$i]["big5"];
  echo  $hd1;
  $sql = "INSERT INTO `list` (`gid`, `src`, `hd`, `hd1`, `hd2`, `name`, `name1`,`price`, `pri`,`btn`, `small1`, `small2`,`small3`, `small4`,`small5`, `middle1`, `middle2`,`middle3`, `middle4`,`middle5`, `big1`, `big2`,`big3`, `big4`,`big5`) VALUES ('$i', '$src', '$hd', '$hd1', '$hd2', '$name', '$name1','$price', '$pri', '$btn', '$small1', '$small2', '$small3', '$small4', '$small5', '$middle1','$middle2', '$middle3', '$middle4', '$middle5', '$big1', '$big2', '$big3', '$big4', '$big5')";
  mysqli_query($con,$sql);
}

?>