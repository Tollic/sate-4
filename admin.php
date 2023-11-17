<?php
    require_once 'db.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/style_db.css">
    <title>Админка</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="js/script_admin.js"></script>
</head>
<body>
    <form class="form" id="myForm">
        <div class="">
            <textarea type="text" name="exercise_1" placeholder="Задание 1" class="exercise_1"></textarea>
            <textarea type="text" name="exercise_2" placeholder="Задание 2" class="exercise_2"></textarea>
        </div>
        <div class="">
            <textarea type="text" name="exercise_3" placeholder="Задание 3" class="exercise_3"></textarea>
            <textarea type="text" name="exercise_4" placeholder="Задание 4" class="exercise_4"></textarea>
        </div>
        <div class="">
            <textarea type="text" name="exercise_5" placeholder="Задание 5" class="exercise_5"></textarea>
            <textarea type="text" name="exercise_6" placeholder="Задание 6" class="exercise_6"></textarea>
        </div>
        <div class="">
            <textarea type="text" name="exercise_7" placeholder="Задание 7" class="exercise_7"></textarea>
            <textarea type="text" name="exercise_8" placeholder="Задание 8" class="exercise_8"></textarea>
        </div>
        <div class="">
            <textarea type="text" name="exercise_9" placeholder="Задание 9" class="exercise_9"></textarea>
            <textarea type="text" name="exercise_10" placeholder="Задание 10" class="exercise_10"></textarea>
        </div>
        <button class="go" onclick="submitForm()">Сохранить</button>
    </form>
</body>
</html>