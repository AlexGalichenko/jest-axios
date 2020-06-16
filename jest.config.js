module.exports = {
  verbose: true,
  globals: {
    env: 'development'
  },
  roots: [
    "./test"
  ],
  testMatch: ['**/test/**/*.js'],
  testResultsProcessor: "./node_modules/jest-junit-reporter",
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./report",
      "filename": "report.html"
    }]
  ]
}