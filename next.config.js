
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['968a3pqzMJtGpxeLJXRoQU'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  