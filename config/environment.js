var _ = require('lodash');

var localEnvVars = {
  TITLE:      'weather_app',
  SAFE_TITLE: 'weather_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
