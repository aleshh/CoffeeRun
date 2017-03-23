<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>coffeerun</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body class="container">
    <header>
      <h1>CoffeeRun</h1>
    </header>
    <section>
      <div class="panel panel-default">
        <div class="panel-body">
          <form data-coffee-order="form">
            <div class="form-group">
              <label for="coffeeOrder">Coffee Order</label>
              <input class="form-control" name="coffee" id="coffeeOrder"
                autofocus>
            </div>
            <div class="form-group">
              <label for="emailInput">Email</label>
              <input class="form-control" type="email" name="emailAddress"
                id="emailInput" value="" placeholder="email@example.com">
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="short">
                Short
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="tall">
                Tall
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" name="size" value="grande">
                Grande
              </label>
            </div>
            <div class="form-group">
              <label for="flavorShot">FlavorShot</label>
              <select id="flavorShot" class="form-control" name="flavor">
                <option value="">None</option>
                <option value="caramel">Caramel</option>
                <option value="mocha">Mocha</option>
                <option value="almond">Almond</option>
              </select>
            </div>
            <div class="form-group">
              <label for="strengthLevel">Caffine Rating</label>
              <input type="range" name="strength" value="30" id="strengthLevel">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-default">Reset</button>
          </form>
        </div>
      </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js" charset="utf-8"></script>
    <script src="scripts/formhandler.js" charset="utf-8"></script>
    <script src="scripts/datastore.js" charset="utf-8"></script>
    <script src="scripts/truck.js" charset="utf-8"></script>
    <script src="scripts/main.js" charset="utf-8"></script>
  </body>
</html>
