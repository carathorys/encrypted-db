module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "src/**/*.ts" }, // *.tsx for React Jsx
    ],
    preprocessors: {
      "src/**/*.ts": ["karma-typescript", "coverage"], // *.tsx for React Jsx
    },
    reporters: ["progress", "karma-typescript", "coverage"],
    browsers: ["Chrome"],
    // optionally, configure the reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  });
};
