const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');





/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'glb', 'gltf', 'obj', "mtl"],
  },
};

module.exports = mergeConfig(defaultConfig, config);
