<?php

require_once "./src/FileHandler.php";


if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    $fileHandler = new FileHandler();
    $allVerbs = $fileHandler->getData();

    foreach ($allVerbs as $index => $verb) {
        if ($verb["id"] === $data["id"]) {
            $verb["star"] = !$verb["star"];
            $allVerbs[$index] = $verb;
        }
    }

    $fileHandler->editVerbs($allVerbs);

    echo json_encode($allVerbs);
}
