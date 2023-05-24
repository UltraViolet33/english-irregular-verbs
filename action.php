<?php

require_once "./src/FileHandler.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // $dataForm = ["frenchVerb", "englishVerb", "preterit", "pastParticiple"];

    // foreach($dataForm as $data)
    // {
    //     if(!isset($_POST[$data]) || empty($_POST[$data]))
    //     {
    //         $_SESSION["msg"] = "Fill all fields";
    //     }
    // }

    $verb = [
        "french" => $_POST["frenchVerb"],
        "english" => $_POST["frenchVerb"],
        "preterit" => $_POST["preterit"],
        "pastParticipate" => $_POST["pastParticipate"]
    ];

    $fileHandler = new FileHandler();
    $fileHandler->writeVerb($verb);

    header("location: index.php");
}
