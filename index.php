<?php require_once './inc/header.php' ?>
<div class="container">
    <div class="row">
        <div class="col-12">
            <div class="row vh-100 align-items-center">
                <div class="col-2">
                    <label id="frenchVerb" for="frenchVerb" class="form-label"></label>
                </div>
                <div class="col-3">
                    <input id="englishVerb" type="text" name="englishVerb" class="form-control" placeholder="Verb in english">
                    <p id="englishError"></p>
                </div>
                <div class="col-3">
                    <input id="preterit" type="text" name="preterit" class="form-control" placeholder="Preterit">
                    <p id="preteritError"></p>
                </div>
                <div class="col-3">
                    <input id="pastParticipate" type="text" name="pastParticipate" class="form-control" placeholder="Past participle">
                    <p id="pastParticipateError"></p>
                </div>
                <div class="col-1">
                    <button class="btn btn-primary" id="submit">Valider</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="./verbs.js"></script>
<?php require_once './inc/footer.php' ?>