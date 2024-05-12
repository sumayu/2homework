const staticFile = require("../appModules/http-utils/static-file")
const {getData, endpoints} = require("../api")
const {config,makeRatingFile} = require("../api")
async function mainRouteController(res, publicUrl,extname) {
    const data = await getData(endpoints.games);
    await makeRatingFile(config.PATCH_TO_RATING_FILE,data);
    res.statusCode = 200;
    staticFile(res, public, extname);
}
module.exports = mainRouteController