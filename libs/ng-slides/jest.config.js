module.exports = {
  name: 'ng-slides',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-slides',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
