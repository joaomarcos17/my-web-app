<?php 

if (isset($_POST['submit'])){
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];


    $mailTo = "mrsbrilliantcleaning@gmail.com";
    $headers = "From:".$mailFrom;
    $txt = "You have a received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);

    header("Location: index.html?mailsend");
}




?>