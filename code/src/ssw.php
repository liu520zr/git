<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","test");
if($con){
    echo "1";
}
# 读取JSON文件的内容
$json = file_get_contents("index.json");
// var_dump($json);
# 把JSON数据转换为数组
$data = json_decode($json,true);
// var_dump($data);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $src = $data[$i]["src"];
  $title = $data[$i]["title"];
  $subtit = $data[$i]["subtit"];
  $date = $data[$i]["date"];
  $btn = $data[$i]["btn"];
  $sql = "INSERT INTO `ssw` (`gid`, `src`, `title`, `subtit`, `date`, `btn`) VALUES ('$i', '$src', '$title', '$subtit', '$date', '$btn')";
    var_dump($sql);
  mysqli_query($con,$sql);
}

?>