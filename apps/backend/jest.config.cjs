const linkmarkerConfig = require('jest-config-linkmarker');

/** @type {import('jest').Config} */
module.exports = {
  ...linkmarkerConfig,
  displayName: {
    name: 'Server',
    color: 'yellow',
  },
};