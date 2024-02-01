const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
      mongodb_username: 'rafaelalejandrog7',
      mongodb_password: 'Pazue3776',
      mongodb_clustername: 'cluster0'
      },
    };
  }
  return {
    env: {
    mongodb_username: 'rafaelalejandrog7',
    mongodb_password: 'Pazue3776',
    mongodb_clustername: 'cluster0'
    },
  };
};

