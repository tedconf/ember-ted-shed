/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-ted-shed',

  included: function included(app) {
    this._super.included(app);

    app.import('node_modules/shed-css/dist/index.css');
  }
};
