<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>WIP test</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-sweetalert/1.0.1/sweetalert.min.css" />
    <script type="module" src="./app/js/router.js?v=<?php echo date('Hms'); ?>"></script>

  </head>
  <body>
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="card col-6 mt-5">
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <button class="btn btn-small btn-light" id="login">
                  <span class="bi bi-person-circle"> Logowanie</span>
                </button>
              </div>
              <div class="col-6" style="text-align: right;">
                <button class="btn btn-small btn-light" id="register">
                  <span class="bi bi-pen"> Rejestracja</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" id="app">

      </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  </body>
</html>