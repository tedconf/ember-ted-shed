/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-ted-shed',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/shed-css/index.css');
  }
};
