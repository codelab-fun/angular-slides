module.exports = {
  name: 'slides-test',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/slides-test/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
