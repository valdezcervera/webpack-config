/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
module.exports = (env) => require(`./webpack.${env}.js`);
