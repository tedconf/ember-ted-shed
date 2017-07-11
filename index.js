/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-ted-shed',

  options: {
    nodeAssets: {
      'shed-css': function() {
        return {
          srcDir: 'dist',
          import: ['index.css']
        }
      },
    }
  }
};
