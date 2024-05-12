// ...импорты и настройки
const path = require("path");
const mimeTypes = require("./public/mime-types");
const{ voteRouteController, gameRouteController} = require("./controllers")

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.statusCode = 200;
      staticFile(res, "/index.html", ".html");
      case "/game":
        gameRouteController(res);
        case "/vote":
            voteRouteController(req, res);
      break;

    default:
        defaultRouteController(res, url);
      const extname = String(path.extname(url)).toLowerCase();
      if (extname in mimeTypes) {
        staticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end("Not Found");
      }
  }
});
// ...импорты и настройки

