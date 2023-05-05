<?php
// Set up a database connection
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check for errors in the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get user input from a login form
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and execute a MySQL query to retrieve the user data from the database
$sql = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query($conn, $sql);

// Check for errors in the query
if (!$result) {
    die("Error: " . mysqli_error($conn));
}

// Check if the user exists and if the password is correct
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    if (password_verify($password, $row['password'])) {
        echo "Login successful!";
    } else {
        echo "Invalid password!";
    }
} else {
    echo "User not found!";
}

// Close the database connection
mysqli_close($conn);
?>
