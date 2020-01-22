<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title><?php echo date('Y'); ?> Louisville-Indianapolis Proximity Association Football Contest | LIPAFC.com</title>
        <meta name="description" content="Louisville-Indianapolis Proximity Association Football Contest ">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/normalize.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <link rel="stylesheet" href="/node_modules/swiper/dist/css/swiper.min.css">

        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png">
        <link rel="manifest" href="/assets/site.webmanifest">
        <link rel="mask-icon" href="/assets/img/safari-pinned-tab.svg" color="#238dde">
        <meta name="msapplication-TileColor" content="#238dde">
        <meta name="theme-color" content="#238dde">
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <?php include 'includes/header.php'; ?>

        <main id="main-content">

          <?php include 'includes/latest-results.php'; ?>

          <section id="about-lipafc" class="wrap about-lipafc">
            <div class="container">
              <h1>The Heck is this?</h1>
              <p>The LIPAFC (Louisville-INDIANAPOLIS PROXIMITY&hellip; oh don't make me type it again) is the soccer rivalry between Indianapolis Eleven and Louisville City FC. As aluded above, this clash of titans is the cause for humanity’s ascension to control this planet. Much like Bill &amp; Ted, this rivalry has spanned the ages and will some day bring peace to the world&hellip; once they learn to play guitar. While sporting celebs will tell you grand tales of Worldly Cups or Superb Owls, only the LIPAFC will tug your heartstrings like a puppy and tear you apart like finding out what happened to Bambi’s mom.</p>

              <p><strong>PREPARE YOURSELF EARTHLINGS, FOR THE LIPAFC</strong></p>
            </div>
          </section>

          <?php include 'includes/results.php'; ?>

          <?php include 'includes/featured-matches.php' ?>

          <!-- <section class="photos">
            <div class="container">
            </div>
          </section> -->

          <!-- <section id="social-media" class="social">
            <div class="social__lipafc">

            </div>
            <div class="social__hashtag">

            </div>
          </section> -->
        </main>

        <?php include 'includes/footer.php' ?>

        <script src="/node_modules/swiper/dist/js/swiper.min.js"></script>
        <script src="assets/js/vendor/jquery.min.js"></script>
        <script src="assets/js/src/main.js"></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-127480715-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-127480715-1');
        </script>

    </body>
</html>
