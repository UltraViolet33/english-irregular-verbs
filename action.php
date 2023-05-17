<?php


if($_SERVER["REQUEST_METHOD"] === "POST")
{
    $dataForm = ["frenchVerb", "englishVerb", "preterit", "pastParticiple"];

    foreach($dataForm as $data)
    {
        if(!isset($_POST[$data]) || empty($_POST[$data]))
        {
            $_SESSION["msg"] = "Fill all fields";
        }
    }


}