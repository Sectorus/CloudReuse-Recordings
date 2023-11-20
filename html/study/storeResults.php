<?php

// Database connection parameters
$servername = "sql210.infinityfree.com";
$username = "if0_35435039";
$password = "ox1E3AMAGM0Hi2";
$dbname = "if0_35435039_userstudy_feedback";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 1: Receive JSON data
$jsonData = file_get_contents("php://input");
$data = json_decode($jsonData, true);

// Step 3: Check if decoding was successful
if ($data !== null) {
    // Step 4: Prepare an SQL query
    $tableName = "userstudy_results"; // replace with your actual table name
    $columns = "json";
    $values = json_encode($data['result']);
    $sql = "INSERT INTO $tableName (json) VALUES ('$values')";

    // Step 5: Execute the SQL query
    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully. Thank you for participating!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Error decoding JSON data";
}

// Close the database connection
$conn->close();

//Fallback filestorage
file_put_contents("feedback/" . time() . '_userstudy.txt', json_encode($data['result']));
?>