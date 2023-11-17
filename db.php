<?php
$DB_HOST = "localhost";
$DB_LOGIN = "root";
$DB_PASSWORD = "";
$DB_NAME = "admin";

$mysql = mysqli_connect($DB_HOST, $DB_LOGIN, $DB_PASSWORD, $DB_NAME);
if ($mysql == false) {
    echo "error";
}

$exercise_1 = isset($_POST['exercise_1']) ? $_POST['exercise_1'] : null;
$exercise_2 = isset($_POST['exercise_2']) ? $_POST['exercise_2'] : null;
$exercise_3 = isset($_POST['exercise_3']) ? $_POST['exercise_3'] : null;
$exercise_4 = isset($_POST['exercise_4']) ? $_POST['exercise_4'] : null;
$exercise_5 = isset($_POST['exercise_5']) ? $_POST['exercise_5'] : null;
$exercise_6 = isset($_POST['exercise_6']) ? $_POST['exercise_6'] : null;
$exercise_7 = isset($_POST['exercise_7']) ? $_POST['exercise_7'] : null;
$exercise_8 = isset($_POST['exercise_8']) ? $_POST['exercise_8'] : null;
$exercise_9 = isset($_POST['exercise_9']) ? $_POST['exercise_9'] : null;
$exercise_10 = isset($_POST['exercise_10']) ? $_POST['exercise_10'] : null;

if (!empty($exercise_1) || !empty($exercise_2) || !empty($exercise_3) || !empty($exercise_4) || !empty($exercise_5) || !empty($exercise_6) || !empty($exercise_7) || !empty($exercise_8) || !empty($exercise_9) || !empty($exercise_10)) {
    $exercise_1_data = "";
    $sql_select = "SELECT exercise_1 FROM user";
    $result_select = $mysql->query($sql_select);

    if ($result_select->num_rows > 0) {
        $sql = "UPDATE user SET 
                exercise_1 = '$exercise_1', exercise_2 = '$exercise_2', 
                exercise_3 = '$exercise_3', exercise_4 = '$exercise_4',
                exercise_5 = '$exercise_5', exercise_6 = '$exercise_6',
                exercise_7 = '$exercise_7', exercise_8 = '$exercise_8',
                exercise_9 = '$exercise_9', exercise_10 = '$exercise_10'";
        $result_update = $mysql->query($sql);
    } else {
        $sql_insert = "INSERT INTO user (exercise_1, exercise_2, exercise_3, exercise_4, exercise_5, exercise_6, exercise_7, exercise_8, exercise_9, exercise_10) 
                        VALUES ('$exercise_1', '$exercise_2', '$exercise_3', '$exercise_4', '$exercise_5', '$exercise_6', '$exercise_7', '$exercise_8', '$exercise_9', '$exercise_10')";
        $result_insert = $mysql->query($sql_insert);
    }
} else {
    echo "";
}

$exercise_1_data = "";
$sql_select = "SELECT exercise_1 FROM user";
$result_select = $mysql->query($sql_select);

if ($result_select->num_rows > 0) {
    while ($row = $result_select->fetch_assoc()) {
        $exercise_1_data = $row['exercise_1'];
    }
} else {
    echo "нет результата";
}

$exercise_2_data = "";
$sql_select_2 = "SELECT exercise_2 FROM user";
$result_select_2 = $mysql->query($sql_select_2);

if ($result_select_2->num_rows > 0) {
    while ($row = $result_select_2->fetch_assoc()) {
        $exercise_2_data = $row['exercise_2'];
    }
} else {
    echo "нет результата";
}

$exercise_3_data = "";
$sql_select_3 = "SELECT exercise_3 FROM user";
$result_select_3 = $mysql->query($sql_select_3);

if ($result_select_3->num_rows > 0) {
    while ($row = $result_select_3->fetch_assoc()) {
        $exercise_3_data = $row['exercise_3'];
    }
} else {
    echo "нет результата";
}

$exercise_4_data = "";
$sql_select_4 = "SELECT exercise_4 FROM user";
$result_select_4 = $mysql->query($sql_select_4);

if ($result_select_4->num_rows > 0) {
    while ($row = $result_select_4->fetch_assoc()) {
        $exercise_4_data = $row['exercise_4'];
    }
} else {
    echo "нет результата";
}

$exercise_5_data = "";
$sql_select_5 = "SELECT exercise_5 FROM user";
$result_select_5 = $mysql->query($sql_select_5);

if ($result_select_5->num_rows > 0) {
    while ($row = $result_select_5->fetch_assoc()) {
        $exercise_5_data = $row['exercise_5'];
    }
} else {
    echo "нет результата";
}

$exercise_6_data = "";
$sql_select_6 = "SELECT exercise_6 FROM user";
$result_select_6 = $mysql->query($sql_select_6);

if ($result_select_6->num_rows > 0) {
    while ($row = $result_select_6->fetch_assoc()) {
        $exercise_6_data = $row['exercise_6'];
    }
} else {
    echo "нет результата";
}

$exercise_7_data = "";
$sql_select_7 = "SELECT exercise_7 FROM user";
$result_select_7 = $mysql->query($sql_select_7);

if ($result_select_7->num_rows > 0) {
    while ($row = $result_select_7->fetch_assoc()) {
        $exercise_7_data = $row['exercise_7'];
    }
} else {
    echo "нет результата";
}

$exercise_8_data = "";
$sql_select_8 = "SELECT exercise_8 FROM user";
$result_select_8 = $mysql->query($sql_select_8);

if ($result_select_8->num_rows > 0) {
    while ($row = $result_select_8->fetch_assoc()) {
        $exercise_8_data = $row['exercise_8'];
    }
} else {
    echo "нет результата";
}

$exercise_9_data = "";
$sql_select_9 = "SELECT exercise_9 FROM user";
$result_select_9 = $mysql->query($sql_select_9);

if ($result_select_9->num_rows > 0) {
    while ($row = $result_select_9->fetch_assoc()) {
        $exercise_9_data = $row['exercise_9'];
    }
} else {
    echo "нет результата";
}

$exercise_10_data = "";
$sql_select_10 = "SELECT exercise_10 FROM user";
$result_select_10 = $mysql->query($sql_select_10);

if ($result_select_10->num_rows > 0) {
    while ($row = $result_select_10->fetch_assoc()) {
        $exercise_10_data = $row['exercise_10'];
    }
} else {
    echo "нет результата";
}

$mysql->close();
?>
