<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>The Bazaarvoice Conversations API with JSONP</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script type="text/javascript" src="script.js"></script>
        <style type="text/css">
        </style>

    </head>

    <body>
        <header>Reviews Page API Example w/JSONP Callback</header>
        <!-- Demonstration purposes only. Request API keys for your application at https://developer.bazaarvoice.com/apps/register -->
        <script src="http://stg.api.bazaarvoice.com/data/reviews.json?apiversion=5.4&passkey=3mlxjav3n99oox8sdfdpd99m9&filter=productid:eq:data-gen-txeel5kxxv1rl5z0g7xv13vo5&callback=JSONPHandler&limit=10"></script>
        <div id="review-container" name="reviewsContainer"></div>
    </body>

</html>