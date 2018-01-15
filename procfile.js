module.exports = (pandora) => {
 
  if(pandora.dev) {
    pandora.process('worker').nodeArgs(['-r', 'ts-node/register', '--trace-warnings'])
    pandora.service('dashboard', './src/index').process('worker')
  } else {
    pandora.service('dashboard', './dist/index').process('worker')
  }
};
