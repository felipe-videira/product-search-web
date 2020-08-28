
module.exports = {
  webpack: (config) => {
    const { rules } = config.module;
    const styleRules = (rules.find((m) => m.oneOf && m.oneOf.find(({ test: reg }) => reg.test('file.css'))) || {}).oneOf;
    if (!styleRules) return config;
    const cssModuleRules = [
      styleRules.find(({ test: reg, use }) => reg.test('file.module.css') && use.loader !== 'error-loader'),
      styleRules.find(({ test: reg, use }) => reg.test('file.module.scss') && use.loader !== 'error-loader'),
    ].filter((n) => n);
    cssModuleRules.forEach((cmr) => {
      const cssLoaderConfig = cmr.use.find(({ loader }) => loader.includes('css-loader'));
      if (cssLoaderConfig && cssLoaderConfig.options) {
        cssLoaderConfig.options.localsConvention = 'camelCase';
      }
    });
    return config;
  },
};
