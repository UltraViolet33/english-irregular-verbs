<?php


class FileHandler
{
    const FILE = "./data/verbs.json";

    public function writeVerb(array $verb)
    {
        $file = fopen(self::FILE, "w");
        $verbStr = json_encode($verb);
        fwrite($file, $verbStr);
        fclose($file);
    }

    public function getData(): array
}
