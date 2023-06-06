<?php require_once './inc/header.php' ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-12 my-5">
            <div class="row justify-content-center">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="verbs" id="allVerbs" autocomplete="off">
                    <label class="btn btn-outline-primary" for="allVerbs">Tous les verbes</label>
                    <input type="radio" class="btn-check" name="verbs" id="starVerbs" autocomplete="off" checked>
                    <label class="btn btn-outline-primary" for="starVerbs">Verbes favoris</label>
                </div>
            </div>
        </div>
        <div class="col-12 my-5">
            <form action="" class="form-inline">
                <div class="row align-items-center">
                    <div class="col-md-2 col-10 my-3">
                        <label id="frenchVerb" for="frenchVerb" class="form-label"></label>
                    </div>
                    <div class="form-group col-10 col-md-2  my-3">
                        <input id="englishVerb" type="text" aria-describedby="validation-english" name="englishVerb" class="form-control" placeholder="Verbe en anglais">
                        <div class="valid-feedback validation">
                            C'est juste !
                        </div>
                        <div id="validation-english" class="invalid-feedback validation">
                            C'est faux !
                        </div>
                    </div>
                    <div class="form-group col-10 col-md-3  my-3">
                        <input id="preterit" type="text" aria-describedby="validation-preterit" name="preterit" class="form-control" placeholder="Preterit">
                        <div class="valid-feedback validation">
                            C'est juste !
                        </div>
                        <div id="validation-preterit" class="invalid-feedback validation">
                            C'est faux !
                        </div>
                    </div>
                    <div class="form-group col-md-3 col-10 my-3">
                        <input id="pastParticipate" type="text" aria-describedby="validation-pastParticipate" name="pastParticipate" class="form-control" placeholder="Participe passé">
                        <div class="valid-feedback validation">
                            C'est juste !
                        </div>
                        <div id="validation-pastParticipate" class="invalid-feedback validation">
                            C'est faux !
                        </div>
                    </div>
                    <div class="col-md-1 col-10 my-3">
                        <button class="btn btn-primary" id="submit" type="button">Valider</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-12 my-5">
            <p id="result" align="center"></p>
        </div>
    </div>
</div>
<script src="./assets/js/functions.js"></script>
<script src="./assets/js/verbs.js"></script>
<?php require_once './inc/footer.php' ?>