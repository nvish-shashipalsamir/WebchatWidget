const path = require("path");

const config = require("./webpack.production");

config.output.filename = "file-upload.webchat-plugin.js";

config.resolve.alias = {
	react: path.resolve(__dirname, "alias/react"),
};

config.entry = "./src/plugins/file-upload/index.jsx";

module.exports = config;
