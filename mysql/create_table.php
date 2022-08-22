<?PHP

include_once('./header.php');

$sql = "CREATE TABLE IF NOT EXISTS dopofo_contact (
  idx          INT(11)      NOT NULL AUTO_INCREMENT COMMENT '자동증가 고유번호',
  username     VARCHAR(50)  NOT NULL                COMMENT '이름',
  useremail    VARCHAR(300) NOT NULL                COMMENT '이메일',
  userdate     DATE         NOT NULL                COMMENT '전송일',  
  PRIMARY KEY (idx)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3 COMMENT='DOPOFO CONTACT TABLE'";

$result = mysqli_query($conn, $sql);

if(!$result){
  die('테이블 생성 실패');
}

else{
  echo('테이블 생성 성공');
}

include_once('./footer.php');

?>
