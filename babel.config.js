module.exports = api => {

  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "alias": {
          "components": "./components",
          "reducers": "./reducers",
          "screens": "./screens",
          "utils": "./utils"
        }
      }]
    ]
  };
};
