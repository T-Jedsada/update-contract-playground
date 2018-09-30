const User = artifacts.require('User')

module.exports = async function(deployer) {
  deployer.deploy(User);
};
