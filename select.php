<?php

$firstname=$_POST['firstname'];
$middlename=$_POST['middlename'];
$lastname=$_POST['lastname'];
$date=$_POST['date'];
$gender=$_POST['gender'];
$addressone=$_POST['addressone'];
$addresstwo=$_POST['addresstwo'];
$city=$_POST['city'];
$province=$_POST['province'];
$postalcode=$_POST['postalcode'];
$country=$_POST['country'];
$email=$_POST['email'];
$mobilenumber=$_POST['mobilenumber'];


// Create a connection 
   
     $conn = new mysqli('localhost','root',' ','student');
   
    if($conn-> connect_error) {
        die("Connection Failed:" . $conn->connect_error);
    } 
    else {
        $stmt= $conn->prepare("insert into registration(firstname, middlename, lastname, date, gender , addressone, addresstwo, city, province, postalcode,country, email, mobilenumber) values(?,?,?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("sssssssssissi",$firstname,$middlename,$lastname,$date,$gender,$addressone, $addresstwo,$city,$province,$postalcode,$country,$email,$mobilenumber);
        $stmt->execute();
        echo "Registration Successful!";
        $stmt->close();
        $conn->close();
    } 
?>