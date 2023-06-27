const path = require("path");

const config = require("./webpack.production.legacy");

config.output.filename = "file-upload.webchat-plugin.legacy.js";

config.resolve.alias = {
	react: path.resolve(__dirname, "alias/react"),
};

config.entry = "./src/plugins/file-upload/index.jsx";

config.target = ['web', 'es5'];

module.exports = config;
