<?php require_once './inc/header.php' ?>
<div class="container my-5">
    <div class="row my-5 justify-content-center">
        <h1 class="text-center">Tous les verbes</h1>
        <div class="col-10 col-md-12">
            <table class="table table-responsive table-hover">
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
                <tbody id="table">
                </tbody>
            </table>
        </div>
    </div>
</div>
<script src="./assets/js/functions.js"></script>
<script src="./assets/js/allVerbs.js"></script>
<?php require_once './inc/footer.php' ?>