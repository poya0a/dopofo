<?PHP

include_once('./header.php');

$nameData     = $_POST['nameData']; 
$emailData    = $_POST['emailData']; 
$dateData     = $_POST['dateData']; 

$sql = "INSERT INTO dopofo_contact (username, useremail, userdate) 
VALUE ('$nameData','$emailData','$dateData')";

$result = mysqli_query($conn, $sql);

if(!$result){  
  die("데이터 입력 실패");
}
else {
  echo('데이터 입력 성공');
}


include_once('./footer.php');
?>