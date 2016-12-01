module.exports = (data) =>{ return `
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <title>bumpbank balance</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="index.css" rel="stylesheet" />
  </head>
  <body>
    <main>
    </main>
    <div  id='data' data-payload='${data}'></div>
    <script src="bundle.js"></script>
  </body>
</html>
`
}
