<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
      <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Home | Steemrcp</title>

        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>

    <body>

      <div id="nav"></div>

      <div class="container picker-container">
        <div class="row picker-row">
          <div id="picker"></div>
        </div><!-- /.row -->
      </div><!-- /.container -->

      <div class="container feedback-container">
        <div class="row feedback-row">
          <div id="feedback"></div>
        </div><!-- /.row -->
      </div><!-- /.container -->

      <script src="{{mix('js/app.js')}}" ></script>

    </body>

</html>
