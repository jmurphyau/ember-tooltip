'use strict';

module.exports = {
  name: 'ember-tooltip',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/darsain-tooltip-0.1.0.js');
    app.import('vendor/darsain-tooltip-0.1.0.shim.js');
    app.import('vendor/darsain-tooltip-0.1.0.css');
  }
};
