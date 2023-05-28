<?php require_once './inc/header.php';
$allVerbs = $fileHandler->getData();
?>
<div class="container my-5">
    <div class="row my-5 justify-content-center">
        <h1 class="text-center">Tous les verbes</h1>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Favoris</th>
                    <th>Français</th>
                    <th>Anglais</th>
                    <th>Prétérit</th>
                    <th>Participe passé</th>
                    <th>Modifier</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($allVerbs as $verb) : ?>
                    <tr>
                        <td>
                            <?php if ($verb["bookmarked"]) : ?>
                                <img src="./assets/star.png" width="20px" alt="">
                            <?php endif ?>
                        </td>
                        <td><?= $verb["french"] ?></td>
                        <td><?= $verb["english"] ?></td>
                        <td><?= $verb["preterit"] ?></td>
                        <td><?= $verb["pastParticipate"] ?></td>
                        <td><a href="">Modifier</a></td>

                    </tr>
                <?php endforeach ?>
            </tbody>
        </table>
    </div>
</div>
<?php require_once './inc/footer.php' ?>