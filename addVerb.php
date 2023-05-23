<?php require_once './inc/header.php' ?>
<div class="container my-2">
    <div class="row justify-content-center">
        <div class="col-12">
            <h1 class="text-center">Add a verb</h1>
        </div>
        <div class="col-4 my-2">
            <form method="POST" action="./action.php">
                <div class="mb-3">
                    <label for="frenchVerb" class="form-label">Verb in french</label>
                    <input type="text" name="frenchVerb" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="englishVerb" class="form-label">Verb in english</label>
                    <input type="text" name="englishVerb" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="preterit" class="form-label">Preterit</label>
                    <input type="text" name="preterit" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="pastParticiple" class="form-label">Past participle</label>
                    <input type="text" name="pastParticipate" class="form-control">
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
<?php require_once './inc/footer.php' ?>