<?php

class FileHandler
{
    const FILE = "./data/verbs.json";

    public function writeVerb(array $verb)
    {
        $data = $this->getData();
        $data[] = $verb;

        $file = fopen(self::FILE, "w");
        $verbStr = json_encode($data);
        fwrite($file, $verbStr);
        fclose($file);
    }

    public function getData(): array
    {
        $data = file_get_contents(self::FILE);
        $data = json_decode($data, true);
        return $data ??  [];
    }
}
