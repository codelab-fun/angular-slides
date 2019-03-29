module.exports = {
  name: 'angular-slides',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-slides',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
