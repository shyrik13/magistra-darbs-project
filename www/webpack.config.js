const path = require('path');

module.exports = {
  entry: {
    index: "./bundle/index.js",
    opengl: "./bundle/opengl.js",
    webgl: "./bundle/webgl.js",
    vulkan: "./bundle/vulkan.js",
    webgpu: "./bundle/webgpu.js"
  },
  output: {
    filename: "[name].bundle.js",
  },
  mode: "development",
};
