<?php require_once './inc/header.php' ?>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="row vh-100 align-items-center">
                <div class="col-2">
                    <label for="frenchVerb" class="form-label">Verb in french</label>
                </div>
                <div class="col-3">
                    <input type="text" name="englishVerb" class="form-control" placeholder="Verb in english">
                </div>
                <div class="col-3">
                    <input type="text" name="preterit" class="form-control" placeholder="Preterit">
                </div>
                <div class="col-3">
                    <input type="text" name="pastParticipate" class="form-control" placeholder="Past participle">
                </div>
                <div class="col-1">
                    <button class="btn btn-primary">Valider</button>
                </div>
            </div>
        </div>
    </div>
</div>
<?php require_once './inc/footer.php' ?>