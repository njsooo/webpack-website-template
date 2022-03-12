module.exports = (env) => ({
  plugins: [env.mode === "production" ? require("autoprefixer") : false],
});
