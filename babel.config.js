module.exports = api => {

  api.cache(true);

  return {
    sourceMaps: true, 
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      ["@babel/plugin-proposal-export-default-from"],
      ["@babel/plugin-proposal-optional-chaining"],
      ["module-resolver", {
        "alias": {
          "components": "./components",
          "reducers": "./reducers",
          "screens": "./screens",
          "modals": "./modals",
          "assets": "./assets",
          "utils": "./utils"
        }
      }]
    ]
  };
};
