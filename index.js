/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-ted-shed',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('node_modules/shed-css/dist/index.css');
  }
};
